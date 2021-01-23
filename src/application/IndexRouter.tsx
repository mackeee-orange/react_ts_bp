import React, { FC } from "react";
import { Route } from "react-router-dom";
import { ScrollToTop } from "./helpers/ScrollToTopOnMount";

// Common
import StaticScene from "scenes/Static";
import SignInScene from "scenes/SignIn";
import SignUpScene from "../scenes/SignUp";

const IndexRouter: FC = () => {
  return (
    <Route>
      <ScrollToTop />
      {/* 認証系 */}
      <SignInScene />
      <SignUpScene />
      {/* 静的ルーティング */}
      <StaticScene />
      {/* ログイン後のアプリケーションのシーン */}
    </Route>
  );
};

export default IndexRouter;
