import Account from "../index";
import BaseRequest, { ApiType, HTTPMethod } from "../../utilities/baseRequest";

export type SignInParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignInPayload = {
  account: Account;
  token: string;
};

export default class SignIn extends BaseRequest<SignInParams, SignInPayload> {
  auth = false;
  api = ApiType.Auth;
  method = HTTPMethod.POST;
  path = "/sign_in";
}
