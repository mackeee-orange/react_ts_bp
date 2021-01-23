import classNames from "classnames";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./style.module.scss";

type Props = {
  to: string;
  goOut?: boolean;
  color?: "primary" | "secondary" | "danger" | "black" | "white" | "darkGray";
  className?: string;
};

// export const resolveToLocation = (to: string | Function, currentLocation: Location) =>
//   typeof to === "function" ? to(currentLocation) : to;
//
// export const normalizeToLocation = (to: string | Function, currentLocation: Location) => {
//   return typeof to === "string"
//     ? createLocation(to, null, undefined, currentLocation)
//     : to;
// };

const Link: FC<Props> = ({ to, color = "black", children, goOut, className }) => {
  return (
    <>
      {goOut ? (
        <a
          className={classNames(styles.link, className)}
          data-color={color}
          href={to}
          target={goOut ? "_blank" : undefined}
          rel={goOut ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ) : (
        <RouterLink to={to} className={classNames(styles.link, className)} data-color={color}>
          {children}
        </RouterLink>
      )}
    </>
  );
};

export default Link;
