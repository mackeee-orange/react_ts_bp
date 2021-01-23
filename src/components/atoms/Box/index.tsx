import React, { FC, useMemo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "auto";
type DirectionalSize = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};
// こっちの方が優先される
type ManualSize = {
  padding?: DirectionalSize | Size;
  margin?: DirectionalSize | Size;
};
type Props = {
  // v: Vertical, h: Horizontal
  vPadding?: Size;
  hPadding?: Size;
  vMargin?: Size;
  hMargin?: Size;
  textCenter?: boolean;
  inline?: boolean;
  onClick?: () => void;
  className?: string;
} & ManualSize;

const Box: FC<Props> = ({
  vPadding,
  hPadding,
  vMargin,
  hMargin,
  padding,
  margin,
  textCenter,
  inline,
  onClick,
  className,
  children
}) => {
  const style = useMemo(() => {
    let r: Record<string, unknown> = {};
    if (typeof padding != "string") {
      r = {
        ...r,
        ...{
          paddingTop: padding?.top,
          paddingLeft: padding?.left,
          paddingRight: padding?.right,
          paddingBottom: padding?.bottom
        }
      };
    }
    if (typeof margin != "string") {
      r = {
        ...r,
        ...{
          marginTop: margin?.top,
          marginLeft: margin?.left,
          marginRight: margin?.right,
          marginBottom: margin?.bottom
        }
      };
    }
    return r;
  }, [padding, margin]);

  return (
    <div
      className={classNames(
        styles.box,
        {
          [styles.textCenter]: textCenter,
          [styles.inline]: inline
        },
        className
      )}
      data-vpad={!padding && vPadding}
      data-hpad={!padding && hPadding}
      data-vmar={!margin && vMargin}
      data-hmar={!margin && hMargin}
      data-padding={typeof padding == "string" && padding}
      data-margin={typeof margin == "string" && margin}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Box;
