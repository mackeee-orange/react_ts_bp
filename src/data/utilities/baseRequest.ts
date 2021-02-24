import { OutOfSpecError, ServerError } from "commons/utilities/exceptions";
import axios, { AxiosInstance } from "axios";
import humps from "humps";
import { API_V1_BASE_URL, AUTH_BASE_URL, PUBLIC_BASE_URL } from "commons/constants/urls";
import PersistenceKeys from "commons/constants/persistenceKeys";
import routes from "../../commons/constants/routes";
import { notification } from "antd";

enum HTTPMethod {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE
}

enum ApiType {
  Auth,
  V1,
  Public
}

export type ContentType = "json" | "formData";

abstract class BaseRequest<
  TInput,
  TPayload,
  TUrlParams extends DictionaryLike | undefined = undefined,
  TQParams extends DictionaryLike | undefined = undefined
> {
  // Require Override
  /// そのリクエストが認証必要かどうか
  abstract auth: boolean;

  /// そのリクエストがどのAPIにむけたものなのか
  abstract api: ApiType;

  /// HTTP Method
  abstract method: HTTPMethod;

  /// そのAPIのHOSTを除いたエンドポイント
  abstract path: string;

  /// content type
  readonly contentType: ContentType = "json";

  // primary function
  async call(variables?: {
    id?: string;
    params?: object;
    urlParams?: TUrlParams;
    qParams?: TQParams;
  }): Promise<TPayload> {
    const { params, urlParams, qParams } = variables || {};
    const pParams: object | FormData | undefined = (() => {
      if (params === undefined) return undefined;

      switch (this.contentType) {
        case "formData": {
          const fData = new FormData();
          const p = { ...params } as DictionaryLike;
          for (const key in p) {
            if (p[key] instanceof File) {
              fData.append(`${key}`, p[key] as string | Blob);
            } else if (Object.prototype.hasOwnProperty.call(p, key)) {
              if (typeof p[key] === "object") {
                const inner = p[key] as DictionaryLike;
                for (const k in inner) {
                  if (Object.prototype.hasOwnProperty.call(inner, k)) {
                    if (typeof inner[k] === "object" && inner[k] instanceof File) {
                      // Fileの場合
                      fData.append(
                        `${humps.decamelize(key)}[${humps.decamelize(k)}]`,
                        inner[k] as string | Blob,
                        (inner[k] as File).name
                      );
                    } else if (typeof inner[k] === "object" && Array.isArray(inner[k])) {
                      // Arrayの場合
                      const data = inner[k] as string[]; // FIXME: string以外もあるかも
                      //配列が空の場合は空の配列を渡せるようにした。
                      if (!data[0]) {
                        fData.append(`${humps.decamelize(key)}[${humps.decamelize(k)}][]`, "");
                      }
                      data.forEach(d => {
                        fData.append(`${humps.decamelize(key)}[${humps.decamelize(k)}][]`, d);
                      });
                    } else {
                      //その他の場合
                      fData.append(
                        `${humps.decamelize(key)}[${humps.decamelize(k)}]`,
                        inner[k] as string | Blob
                      );
                    }
                  }
                }
              } else {
                fData.append(humps.decamelize(key), p[key] as string | Blob);
              }
            }
          }
          return fData;
        }
        default:
          return params && humps.decamelizeKeys(params);
      }
    })();
    try {
      const res = await (async () => {
        switch (this.method) {
          case HTTPMethod.GET:
            return await this.apiClient.get<TPayload>(this.configurePath(urlParams, qParams));
          case HTTPMethod.POST:
            return await this.apiClient.post<TPayload>(
              this.configurePath(urlParams, qParams),
              pParams
            );
          case HTTPMethod.PUT:
            return await this.apiClient.put<TPayload>(
              this.configurePath(urlParams, qParams),
              pParams
            );
          case HTTPMethod.PATCH:
            return await this.apiClient.patch<TPayload>(
              this.configurePath(urlParams, qParams),
              pParams
            );
          case HTTPMethod.DELETE:
            return await this.apiClient.delete<TPayload>(this.configurePath(urlParams, qParams));
          default:
            throw new OutOfSpecError("HTTPMethod");
        }
      })();
      if (res === undefined) throw new ServerError("通信エラーが発生しました");

      return res.data;
    } catch (e) {
      throw new ServerError(e);
    }
  }

  // ------- private -----------

  // TODO: APIクライアントのカスタムパーサーを実装して、指定
  private get apiClient(): AxiosInstance {
    const headers: DictionaryLike = {
      "Content-Type": this.getContentType(),
      "X-Requested-With": "XMLHttpRequest",
      crossDomain: true
    };

    if (this.auth) {
      const token = localStorage.getItem(PersistenceKeys.TOKEN);
      if (!token) {
        // FIXME: 微妙(Storeのクリアなど)
        window.location.href = routes.signIn();
      }

      headers["Authorization"] = `Bearer ${token}`;
    }

    const baseUrl = (() => {
      switch (this.api) {
        case ApiType.Auth:
          return AUTH_BASE_URL;
        case ApiType.V1:
          return API_V1_BASE_URL;
        case ApiType.Public:
          return PUBLIC_BASE_URL;
        default:
          throw new OutOfSpecError("ApiType");
      }
    })();
    const client = axios.create({
      baseURL: baseUrl,
      headers: headers,
      withCredentials: false,
      transformResponse: Array.isArray(axios.defaults.transformResponse)
        ? [...axios.defaults.transformResponse, data => humps.camelizeKeys(data)]
        : [data => humps.camelizeKeys(data)]
    });
    client.interceptors.response.use(
      res => res,
      error => {
        switch (error.response.status) {
          case 401:
            localStorage.setItem(PersistenceKeys.TOKEN, "");
            if (!window.location.href.includes("sign_in")) {
              window.location.href = routes.signIn();
              notification.error({ message: "ログインしてください" });
            }
            // throw new UnAuthorizedError();
            break;
          default:
            console.error(error.message);
            return;
        }
      }
    );
    return client;
  }

  private configurePath(urlParams: TUrlParams | undefined, qParams: TQParams | undefined): string {
    let path = this.path;
    let queries = "";
    if (urlParams) {
      Object.entries(urlParams as DictionaryLike).forEach(([key, val], _) => {
        path = path.replace(`:${key}`, val as string);
      });
    }
    if (qParams) {
      Object.entries(qParams as DictionaryLike).forEach(([key, val], _) => {
        if (queries === "") {
          queries = `?${humps.decamelize(key)}=${val}`;
        } else {
          queries = `${queries}&${key}=${val}`;
        }
      });
    }
    return `${path}${queries}`;
  }

  private getContentType(): string {
    switch (this.contentType) {
      case "formData":
        return "multipart/form-data";
      default:
        return "application/json";
    }
  }
}

export { HTTPMethod, ApiType };
export default BaseRequest;
