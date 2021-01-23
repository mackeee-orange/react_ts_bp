import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

type Props = {
  name?: string;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: boolean;
  onText: string;
  offText: string;
  onChange?: (enabled: boolean) => void;
  className?: string;
};

const TextToggle: FC<Props> = ({
  name,
  innerRef,
  defaultValue = false,
  onText,
  offText,
  onChange,
  className
}) => {
  const [on, setOn] = useState(defaultValue);
  useEffect(() => {
    onChange?.(on);
  }, [on]);
  return (
    <div className={className}>
      <input type="hidden" name={name} ref={innerRef} />
      <button
        onClick={e => {
          e.preventDefault();
          setOn(true);
        }}
        className={classNames(styles.button, {
          [styles.active]: on
        })}
      >
        {onText}
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          setOn(false);
        }}
        className={classNames(styles.button, {
          [styles.active]: !on
        })}
      >
        {offText}
      </button>
    </div>
  );
};

export default TextToggle;
