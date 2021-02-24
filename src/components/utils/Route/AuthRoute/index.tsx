import React, { FC, Fragment } from "react";
import useCurrentAccount from "commons/hooks/useCurrentAccount";
import { Route, Redirect, RouteProps } from "react-router-dom";
import routes from "commons/constants/routes";

type Props = {
  immediately?: boolean; // チラつきもなくログイン画面にリダイレクトさせたい場合に使い
  inRegistration?: boolean;
} & RouteProps;

type AuthComponentProps = {
  lazy?: boolean;
  inRegistration?: boolean;
};

const AuthComponent: FC<AuthComponentProps> = ({ lazy, inRegistration, children }) => {
  const { isLoggedIn } = useCurrentAccount(true, !!inRegistration);
  return <Fragment>{lazy || isLoggedIn ? children : <Redirect to={routes.signIn()} />}</Fragment>;
};

const AuthRoute: FC<Props> = ({ immediately = true, inRegistration, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <AuthComponent lazy={!immediately} inRegistration={inRegistration}>
          {rest.render?.(props)}
        </AuthComponent>
      )}
    />
  );
};

export default AuthRoute;
