import React, { FC, ReactElement } from "react";
import { Row, Col } from "antd";
import styles from "../Input/style.module.scss";
import classNames from "classnames";

type Props = {
  label?: string;
  required?: boolean;
  children: ReactElement | ReactElement[];
  className?: string;
};

const InputGroup: FC<Props> = ({ label, required, children, className }) => {
  const margin = !required;
  return (
    <Row className={classNames(styles.inputGroup, className)}>
      {label && (
        <Col flex="100px">
          <label>{label}</label>
        </Col>
      )}
      {required && <p className={styles.required}>必須</p>}
      <Col flex="auto" data-margin={margin} className={styles.inputWrapper}>
        {children}
      </Col>
    </Row>
  );
};

export default InputGroup;
