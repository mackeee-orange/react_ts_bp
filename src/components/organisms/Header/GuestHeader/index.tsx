import React, { FC } from "react";
import { Row, Col } from "antd";
import { ContainButton } from "../../../atoms/Button/ContainButton";
import routes from "../../../../commons/constants/routes";

const GuestHeader: FC = () => {
  return (
    <header>
      <Row>
        <Col flex="100px">ロゴ</Col>
        <Col flex="auto">
          <Row justify={"end"} gutter={24}>
            <Col>
              <ContainButton color={"primary"} link to={routes.signIn()}>
                ログイン
              </ContainButton>
            </Col>
            <Col>
              <ContainButton color={"primary"} isOutlined link to={routes.signUp()}>
                新規登録
              </ContainButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default GuestHeader;
