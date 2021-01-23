import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type BadgeProps = {
  type: "circle" | "roundSquare";
  children: string | number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => any;
};

const Badge: FC<BadgeProps> = ({ type, children, className, onClick }) => {
  return onClick ? (
    <button
      onClick={onClick}
      className={
        type === "circle"
          ? classNames(styles.circle, className)
          : classNames(styles.roundSquare, className)
      }
    >
      {children}
    </button>
  ) : (
    <div
      className={
        type === "circle"
          ? classNames(styles.circle, className)
          : classNames(styles.roundSquare, className)
      }
    >
      {children}
    </div>
  );
};

export default Badge;
