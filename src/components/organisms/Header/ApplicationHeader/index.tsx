import React, { FC } from "react";
import { Row, Col } from "antd";
import useCurrentAccount from "../../../../commons/hooks/useCurrentAccount";

const ApplicationHeader: FC = () => {
  const { account } = useCurrentAccount();
  return (
    <header>
      <Row>
        <Col flex="100px">ロゴ</Col>
        <Col flex="auto">
          <Row justify={"end"} gutter={24}>
            <Col>{account?.username}さん</Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default ApplicationHeader;
