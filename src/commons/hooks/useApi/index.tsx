import BaseRequest from "data/utilities/baseRequest";
import { Context, useCallback, useEffect, useState } from "react";

type ApiOption<S, T extends DictionaryLike | undefined, U extends DictionaryLike | undefined> = {
  variables: {
    id?: string;
    params?: object;
    urlParams?: T;
    qParams?: U;
  };
  context?: Context<unknown>;
  onSuccess?: (data: S) => void;
  onFailure?: (e: Error) => void;
};

export default function useApi<
  TInput,
  TPayload,
  TUrlParams extends DictionaryLike | undefined,
  TQParams extends DictionaryLike | undefined
>(
  request: BaseRequest<TInput, TPayload, TUrlParams, TQParams>,
  option?: ApiOption<TPayload, TUrlParams, TQParams>
): {
  data: TPayload | undefined;
  error: Error | undefined;
} {
  const [data, setData] = useState<TPayload>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    request
      .call(option ? option.variables : {})
      .then(data => {
        setData(data);
        option?.onSuccess?.(data);
      })
      .catch(e => {
        // TODO: NetWorks/Data層の例外処理
        setError(e);
        option?.onFailure?.(e);
      });
  }, []);

  return {
    data,
    error
  };
}

export function useLazyApi<
  TInput,
  TPayload,
  TUrlParams extends DictionaryLike | undefined,
  TQParams extends DictionaryLike | undefined
>(
  request: BaseRequest<TInput, TPayload, TUrlParams, TQParams>,
  option?: ApiOption<TPayload, TUrlParams, TQParams>
): [
  (option?: ApiOption<TPayload, TUrlParams, TQParams>) => Promise<TPayload | null>,
  {
    data: TPayload | undefined;
    error: Error | undefined;
  }
] {
  const [data, setData] = useState<TPayload>();
  const [error, setError] = useState<Error>();

  const onCall = useCallback<
    (option?: ApiOption<TPayload, TUrlParams, TQParams>) => Promise<TPayload | null>
  >(
    async overOption => {
      const op = overOption || option;
      try {
        const data = await request.call(op ? op.variables : {});
        if (data) {
          setData(data);
          option?.onSuccess?.(data);
        }
        return data;
      } catch (e) {
        setError(e);
        option?.onFailure?.(e);
        return null;
      }
    },
    [request]
  );

  return [
    onCall,
    {
      data,
      error
    }
  ];
}
