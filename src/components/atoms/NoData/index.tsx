import React, { FC } from "react";
import styles from "./style.module.scss";

type Props = {
  size?: "small" | "large";
};
const NoData: FC<Props> = ({ size }) => (
  <div className={styles.noData}>
    <p>nodata</p>
  </div>
);

export default NoData;
