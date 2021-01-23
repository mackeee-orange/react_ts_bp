import Account from "../index";
import BaseRequest, { HTTPMethod, ApiType } from "../../utilities/baseRequest";

export type SignUpParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignUpPayload = {
  account: Account;
  token: string;
};

export default class SignUp extends BaseRequest<SignUpParams, SignUpPayload> {
  auth = false;
  api = ApiType.Auth;
  method = HTTPMethod.POST;
  path = "/sign_up";
}
