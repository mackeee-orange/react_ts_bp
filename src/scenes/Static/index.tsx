import React, { FC, Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "commons/constants/routes";
import TopPage from "./presentation/TopPage";

const StaticScene: FC = () => {
  return (
    <Fragment>
      <Route exact path={routes.top()} component={TopPage} />
    </Fragment>
  );
};

export default StaticScene;
