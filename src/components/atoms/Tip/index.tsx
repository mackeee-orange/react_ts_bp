import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { ReactComponent as onClickClose } from "assets/images/iconSVGs/onclick-close.svg";
import Icon from "components/atoms/Icon/BaseIcon";

type TipProps = {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => any;
  className?: string;
};

const Tip: FC<TipProps> = ({ children, onClick, className }) => {
  return onClick ? (
    <div className={classNames(styles.tip, className)}>
      <p className={styles.text}>{children}</p>
      <button onClick={onClick}>
        <Icon className={styles.onClickClose} component={onClickClose} onClick={onClick} />
      </button>
    </div>
  ) : (
    <div className={classNames(styles.tip, className)}>
      <p>{children}</p>
    </div>
  );
};

export default Tip;
