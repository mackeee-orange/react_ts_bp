import React, { ElementType, FC, ReactNode } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  link?: boolean;
  color?:
    | "gradation"
    | "primary"
    | "secondary"
    | "danger"
    | "white"
    | "gray"
    | "black"
    | "darkGray"
    | "lightGray";
  shape?: "roundSquare" | "square" | "circle";
  size?: "sm" | "md" | "lg";
  wide?: boolean;
  dropShadow?: "sm" | "md" | "lg";
  to?: string;
  goOut?: boolean;
  isOutlined?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => any;
  width?: number;
  className?: string;
  icon?: ReactNode;
}
const BaseButton: FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "md",
  shape = "roundSquare",
  isOutlined = false,
  dropShadow,
  className,
  ...props
}) => {
  let Component;
  Component = "button" as ElementType;
  if (props.link) Component = "a" as ElementType;
  delete props.link;
  return (
    <Component
      {...props}
      className={classNames(styles.button, className)}
      data-color={color}
      data-size={size}
      data-outlined={isOutlined}
      data-disabled={props.disabled}
      data-shape={shape}
      data-shadow={dropShadow}
      data-wide={props.wide}
      rel={props.goOut ? "noopener noreferrer" : undefined}
      target={props.goOut && "_blank"}
      href={props.to}
      style={props.width && { width: props.width }}
    >
      <span className={styles.icon}>{props.icon}</span>
      {children}
    </Component>
  );
};

export default BaseButton;
