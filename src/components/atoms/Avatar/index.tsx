import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import SampleUser from "assets/images/sampleUser.png";

type AvatarProps = {
  size?: "sm" | "md" | "lg" | "xlg";
  isOutlined?: boolean;
  shape?: "circle" | "square";
  alt?: string;
  src?: string | null;
  className?: string;
};

const Avatar: FC<AvatarProps> = ({
  size = "md",
  shape = "circle",
  src,
  isOutlined,
  alt,
  className
}) => (
  <img
    src={src ? src : SampleUser}
    alt={alt}
    className={classNames(styles.avatar, className)}
    data-outlined={isOutlined}
    data-shape={shape}
    data-size={size}
  />
);

export default Avatar;
