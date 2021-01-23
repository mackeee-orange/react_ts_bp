import AccountAction, { AccountActionType as Type } from "./accountAction";
import { Reducer } from "react";
import PersistenceKeys from "commons/constants/persistenceKeys";
import Account from "../index";

export type AccountState = {
  me: Account | undefined;
  token: string | undefined;
  isLoggedIn: boolean;
};

export const accountInitialState = {
  me: undefined,
  token: localStorage.getItem(PersistenceKeys.TOKEN) || undefined,
  isLoggedIn: false
};

export const accountReducer: Reducer<AccountState, AccountAction> = (
  state: AccountState = accountInitialState,
  action: AccountAction
) => {
  switch (action.type) {
    case Type.SET_CURRENT_ACCOUNT:
      return {
        ...state,
        me:
          !state.me && !action.payload?.account
            ? undefined
            : ({ ...state.me, ...action.payload?.account } as Account),
        isLoggedIn: !!action.payload && !!state.token
      };
    case Type.SET_AUTH_TOKEN:
      localStorage.setItem(PersistenceKeys.TOKEN, action.payload?.token || "");
      return {
        ...state,
        token: action.payload?.token || "",
        isLoggedIn: !!action.payload?.token && !!state.me
      };
    case Type.SET_CURRENT_ACCOUNT_WITH_TOKEN:
      localStorage.setItem(PersistenceKeys.TOKEN, action.payload?.token || "");
      return {
        ...state,
        me:
          !state.me && !action.payload?.account
            ? undefined
            : ({ ...state.me, ...action.payload?.account } as Account),
        token: action.payload?.token,
        isLoggedIn: !!action.payload?.account && !!state.token
      };
    case Type.SIGN_OUT:
      localStorage.setItem(PersistenceKeys.TOKEN, "");
      return accountInitialState;
    default:
      return state;
  }
};
