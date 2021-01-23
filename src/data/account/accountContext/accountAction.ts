import Account from "../index";

export type Payload = {
  account?: Account;
  token?: string;
};

export default interface AccountAction extends Action {
  type: string;
  payload?: Payload;
}

export enum AccountActionType {
  SET_CURRENT_ACCOUNT_WITH_TOKEN = "SET_CURRENT_ACCOUNT_WITH_TOKEN",
  SET_CURRENT_ACCOUNT = "SET_CURRENT_ACCOUNT",
  SET_AUTH_TOKEN = "SET_AUTH_TOKEN",
  SIGN_OUT = "SIGN_OUT"
}
