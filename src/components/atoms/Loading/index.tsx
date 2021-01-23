import React, { FC } from "react";
import styles from "./style.module.scss";

const Loading: FC = () => (
  <div className={styles.container}>
    <div className={styles.block}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  </div>
);

export default Loading;
