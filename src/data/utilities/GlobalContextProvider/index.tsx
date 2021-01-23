import React, { FC, Fragment } from "react";
import { AccountStateProvider } from "../../account/accountContext";

const GlobalContextProvider: FC = ({ children }) => {
  return (
    <Fragment>
      <AccountStateProvider>{children}</AccountStateProvider>
    </Fragment>
  );
};

export default GlobalContextProvider;
