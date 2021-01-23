import React, { FC, Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "commons/constants/routes";

import SignUpPage from "./presentation/SignUpPage";
import { withStaticPageLayout } from "../../components/templates/Layouts/@helpers/withHeaders";

const SignUpScene: FC = () => {
  return (
    <Fragment>
      <Route exact path={routes.signUp()} component={withStaticPageLayout(SignUpPage)} />
    </Fragment>
  );
};

export default SignUpScene;
