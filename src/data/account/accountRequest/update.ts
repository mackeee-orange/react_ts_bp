import Account, { Gender } from "../index";
import BaseRequest, { HTTPMethod, ApiType, ContentType } from "../../utilities/baseRequest";
import { Moment } from "moment";

type UrlParams = {
  id: string;
};

export type UpdateAccountParams = {
  account: Partial<{
    avatar: File;
    username: string;
    gender: Gender | null;
    birthday: Moment | null;
  }>;
};

export type UpdateAccountPayload = Account;

export default class Update extends BaseRequest<
  UpdateAccountParams,
  UpdateAccountPayload,
  UrlParams
> {
  auth = true;
  api = ApiType.V1;
  method = HTTPMethod.PATCH;
  path = "/accounts/:id";
  contentType = "formData" as ContentType;
}
