import React, { FC } from "react";
import Icon from "@ant-design/icons";
import classNames from "classnames";
import styles from "./style.module.scss";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

const BaseIcon: FC<IconComponentProps> = props => (
  <Icon
    component={props.component}
    className={classNames(styles.icon, props.className)}
    onClick={props.onClick}
  />
);

export default BaseIcon;
