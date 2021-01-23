import React, { FC, ReactType } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type TagProps = {
  color?: "black" | "gray" | "secondary";
  size?: "md" | "sm";
  className?: string;
  width?: number;
};

const Tag: FC<TagProps> = ({ color = "black", size = "md", children, className, ...props }) => {
  return (
    <div
      {...props}
      className={classNames(styles.tag, className)}
      data-color={color}
      data-size={size}
      style={props.width && props.width !== 0 ? { maxWidth: props.width } : undefined}
    >
      {children}
    </div>
  );
};

export default Tag;
