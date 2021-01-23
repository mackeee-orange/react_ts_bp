import Account from "../index";
import BaseRequest, { HTTPMethod, ApiType } from "../../utilities/baseRequest";

type Payload = {
  accounts: Account[];
};

export type SearchAccountQueries = {
  keyword?: string;
  minAge?: string;
  maxAge?: string;
};

export default class Search extends BaseRequest<
  undefined,
  Payload,
  undefined,
  SearchAccountQueries
> {
  auth = true;
  api = ApiType.V1;
  method = HTTPMethod.GET;
  path = "/accounts";
}
