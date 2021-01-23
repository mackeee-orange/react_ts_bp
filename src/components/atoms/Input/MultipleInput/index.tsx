import React, { FC, useCallback, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Select as AntSelect } from "antd";

type Props = {
  name: string;
  placeholder?: string;
  size?: SizeType;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: string[];
  required?: boolean;
  wide?: boolean;
  onChange?: (val: string[]) => void;
  className?: string;
  searchButton?: boolean;
};

const MultipleInput: FC<Props> = props => {
  const {
    name,
    placeholder,
    size = "md",
    innerRef,
    defaultValue,
    wide,
    onChange,
    className,
    required,
    children
  } = props;

  const [val, setVal] = useState<string[]>(defaultValue || []);
  const onValChange = useCallback((val: string[]) => {
    setVal(val);
    onChange?.(val);
  }, []);

  return (
    <div className={styles.inputWrap}>
      {required && <p className={styles.required}>必須</p>}
      <input type="hidden" name={name} ref={innerRef} value={val} />
      <AntSelect
        mode="tags"
        placeholder={placeholder}
        defaultValue={defaultValue}
        showArrow={false}
        tokenSeparators={[","]}
        dropdownStyle={{ display: "none" }}
        onChange={onValChange}
        className={classNames(styles.input, styles[size], { [styles.wide]: wide }, className)}
      >
        {children}
      </AntSelect>
    </div>
  );
};

export default MultipleInput;
