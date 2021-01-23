import React, { FC, createContext, useReducer, Dispatch } from "react";
import { accountInitialState, accountReducer, AccountState } from "./accountReducer";
import AccountAction from "./accountAction";

export type AccountContext = {
  state: AccountState;
  dispatch: Dispatch<AccountAction>;
};
const accountContext = createContext({} as AccountContext);
const { Provider } = accountContext;

export const AccountStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, accountInitialState, s => s);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default accountContext;
