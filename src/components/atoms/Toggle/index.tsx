import React, { FC, Fragment, useEffect, useState } from "react";
import { Switch } from "antd";

type Props = {
  name?: string;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: boolean;
  onChange?: (checked: boolean | undefined) => void;
  onText?: string;
  offText?: string;
};

const Toggle: FC<Props> = ({ name, innerRef, defaultValue, onChange, onText, offText }) => {
  const [value, setValue] = useState<boolean | undefined>(defaultValue);
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <Fragment>
      <input type="hidden" name={name} ref={innerRef} value={value ? String(value) : undefined} />
      <span>
        {offText}
        <Switch onChange={setValue} />
        {onText}
      </span>
    </Fragment>
  );
};

export default Toggle;
