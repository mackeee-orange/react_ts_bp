import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "commons/constants/routes";
import { UnAuthorizedError } from "../../utilities/exceptions";
import accountContext, { AccountContext } from "data/account/accountContext";
import Account from "data/account";
import AccountRequest from "data/account/accountRequest";
import { AccountActionType } from "data/account/accountContext/accountAction";
import { useLazyApi } from "../useApi";

function useCurrentAccount(
  requiredLogin = true,
  inRegistration = false
): {
  isLoggedIn: boolean;
  token: string | undefined;
  account: Account | undefined;
  signOut: () => void;
  context: AccountContext;
  accountLoaded: boolean;
} {
  // Utilities
  const history = useHistory();
  const context = useContext(accountContext);

  // Properties -------------
  const me: Account | undefined = context.state?.me;
  const token: string | undefined = context.state?.token;
  const [accountLoaded, setAccountLoaded] = useState(false);

  // Callbacks
  const signOut = useCallback(() => {
    context.dispatch?.({ type: AccountActionType.SIGN_OUT });
    history.push(routes.signIn());
  }, [context]);
  const [fetchCurrentAccount] = useLazyApi(new AccountRequest.Get(), {
    variables: { urlParams: { id: me?.id } },
    onSuccess: data => {
      setAccountLoaded(true);
      context.dispatch?.({
        type: AccountActionType.SET_CURRENT_ACCOUNT,
        payload: { account: data }
      });
    },
    onFailure: e => {
      if (e instanceof UnAuthorizedError && requiredLogin && !inRegistration) {
        signOut();
        history.push(routes.signIn());
      }
    }
  });

  // 状態監視 -----------
  // tokenがあってcurrentAccount情報がない時はfetchしておく => 取れなかったらtoken不正
  useEffect(() => {
    if (token && !me && !accountLoaded) {
      fetchCurrentAccount();
    }
  }, [me, token, fetchCurrentAccount]);

  return {
    isLoggedIn: !!token,
    token,
    account: me,
    signOut,
    context,
    accountLoaded
  };
}

export default useCurrentAccount;
