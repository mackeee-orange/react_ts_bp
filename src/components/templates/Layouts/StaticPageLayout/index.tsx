import React, { FC } from "react";
import { Layout } from "antd";
import GuestHeader from "../../../organisms/Header/GuestHeader";

const { Content, Header } = Layout;

const StaticPageLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Header>
        <GuestHeader />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default StaticPageLayout;
