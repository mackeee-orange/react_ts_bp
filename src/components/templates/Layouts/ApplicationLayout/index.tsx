import React, { FC } from "react";
import ApplicationHeader from "../../../organisms/Header/ApplicationHeader";

const ApplicationLayout: FC = ({ children }) => {
  return (
    <div>
      <ApplicationHeader />

      <main>{children}</main>

      <footer>フッター</footer>
    </div>
  );
};

export default ApplicationLayout;
