import Account from "../index";
import BaseRequest, { HTTPMethod, ApiType } from "../../utilities/baseRequest";

type UrlParams = {
  id: string;
};

type Payload = Account;

export default class Get extends BaseRequest<undefined, Payload, UrlParams> {
  auth = true;
  api = ApiType.V1;
  method = HTTPMethod.GET;
  path = "/accounts/:id";
}
