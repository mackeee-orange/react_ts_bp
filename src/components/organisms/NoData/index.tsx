import React, { FC } from "react";
import styles from "./style.module.scss";
import { Empty } from "antd";

const NoData: FC = () => {
  return (
    <div className={styles.noData}>
      <Empty />
    </div>
  );
};

export default NoData;
