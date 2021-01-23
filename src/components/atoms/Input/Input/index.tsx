import classNames from "classnames";
import { ContainButton } from "components/atoms/Button/ContainButton";
import { SearchIcon } from "components/atoms/Icon";
import React, { FC } from "react";
import styles from "./style.module.scss";

export type InputProps = {
  name: string;
  placeholder?: string;
  size?: SizeType;
  type?: "text" | "email" | "password" | "number" | "hidden" | "url";
  disabled?: boolean;
  autoComplete?: string;
  icon?: React.ReactNode;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: string | number | string[];
  wide?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  searchButton?: boolean;
  min0?: boolean;
};

const Input: FC<InputProps> = props => {
  const {
    name,
    placeholder,
    size = "md",
    type,
    disabled,
    autoComplete,
    icon,
    innerRef,
    defaultValue,
    wide,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    className,
    min0 = true
  } = props;
  return icon ? (
    <InputWithIcon
      {...props}
      className={classNames(
        {
          [styles.wide]: wide,
          [styles[size]]: size
        },
        className
      )}
    />
  ) : (
    <div className={styles.inputWrap}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        readOnly={!!disabled}
        ref={innerRef}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={classNames(
          {
            [styles.wide]: wide,
            [styles[size]]: size
          },
          className,
          styles.inputContent
        )}
        min={type === "number" && min0 ? "0" : undefined}
      />
    </div>
  );
};

const InputWithIcon: FC<InputProps> = props => {
  const {
    name,
    placeholder,
    type,
    disabled,
    autoComplete,
    defaultValue,
    innerRef,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    searchButton
  } = props;
  let Icon: FC<{ className?: string }>;
  if (props.icon) {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    Icon = ({ className }) => <span className={className}>{props.icon}</span>;
  } else {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    Icon = ({ className }) => <span className={className} />;
  }
  return (
    <span className={classNames(styles.baseContainer, props.className)}>
      <span className={classNames(styles.prefixIcon, { [styles[props.size || "md"]]: props.size })}>
        <Icon />
      </span>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        readOnly={!!disabled}
        ref={innerRef}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className=""
      />
      {searchButton && (
        <ContainButton size="md" width={76}>
          <SearchIcon className={styles.searchIcon} />
          検索
        </ContainButton>
      )}
    </span>
  );
};

export default Input;
