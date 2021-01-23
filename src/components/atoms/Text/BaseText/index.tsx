import React, { FC } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

export type BaseTextProps = {
  // color type
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  darkGray?: boolean;
  mediumGray?: boolean;
  disabled?: boolean;
  sub?: boolean;
  opposite?: boolean; // 基本文字色の単体の色(e.g. 基本が黒だったら白)
  // attributes
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  editable?: boolean;
  // deco
  underline?: boolean;
  bold?: boolean;
  ellipsis?: boolean;
  // other
  htmlNode?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

function selectSizeClass(size: "xs" | "sm" | "md" | "lg" | "xl"): string {
  return styles[size];
}

const BaseText: FC<BaseTextProps> = ({
  primary,
  secondary,
  danger,
  darkGray,
  mediumGray,
  disabled,
  sub,
  opposite,
  bold,
  underline,
  size = "md",
  editable,
  htmlNode = "div",
  children,
  onClick,
  className
}) => {
  const Component = htmlNode as React.ElementType;
  return (
    <Component
      className={classNames(
        styles.base,
        selectSizeClass(size),
        {
          [styles.primary]: primary,
          [styles.secondary]: secondary,
          [styles.danger]: danger,
          [styles.darkGray]: darkGray,
          [styles.mediumGray]: mediumGray,
          [styles.disabled]: disabled,
          [styles.sub]: sub,
          [styles.opposite]: opposite,
          [styles.bold]: bold,
          [styles.underline]: underline
        },
        className
      )}
      onClick={onClick}
      contentEditable={editable}
    >
      {children}
    </Component>
  );
};

export default BaseText;
