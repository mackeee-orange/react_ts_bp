import React, { FC, Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "commons/constants/routes";

import SignInPage from "./presentation/SignInPage";
import { withStaticPageLayout } from "components/templates/Layouts/@helpers/withHeaders";

const AuthScene: FC = () => {
  return (
    <Fragment>
      <Route exact path={routes.signIn()} component={withStaticPageLayout(SignInPage)} />
    </Fragment>
  );
};

export default AuthScene;
