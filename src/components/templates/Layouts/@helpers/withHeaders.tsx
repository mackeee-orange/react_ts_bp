import React, { FC } from "react";
import ApplicationLayout from "../ApplicationLayout";
import StaticPageLayout from "../StaticPageLayout";

export const withStaticPageLayout = (Child: FC<unknown>) => () => {
  return (
    <StaticPageLayout>
      <Child />
    </StaticPageLayout>
  );
};

export const withApplicationLayout = (Child: FC<unknown>) => () => {
  return (
    <ApplicationLayout>
      <Child />
    </ApplicationLayout>
  );
};
