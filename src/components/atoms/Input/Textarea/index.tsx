import React, { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { InputProps } from "../Input";

type TextareaProps = Omit<InputProps, "type" | "autoComplete"> & {
  rows: number;
  cols?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  innerRef?:
    | ((ref: HTMLTextAreaElement | null) => void)
    | React.RefObject<HTMLTextAreaElement>
    | null;
};

const Textarea: FC<TextareaProps> = props => {
  const {
    name,
    placeholder,
    innerRef,
    rows,
    cols,
    disabled,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    className
  } = props;
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      ref={innerRef}
      rows={rows}
      cols={cols}
      readOnly={!!disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      defaultValue={defaultValue}
      className={classNames(styles.textarea, className)}
    />
  );
};

export default Textarea;
