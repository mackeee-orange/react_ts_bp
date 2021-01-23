import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type Props = {
  size?: SizeType;
  width?: number;
};

const SectionInnerWrap: FC<Props> = ({ size = "md", width, children }) => {
  return (
    <div
      className={classNames(styles.sectionInnerWrap, { [size]: size })}
      style={width ? { width: width } : {}}
    >
      {children}
    </div>
  );
};

export default SectionInnerWrap;
