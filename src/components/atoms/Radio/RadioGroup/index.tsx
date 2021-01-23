import { Radio as AntRadio } from "antd";
import React, { FC, Fragment, useEffect, useState } from "react";

type Props<T = string> = {
  name?: string;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: T;
  onChange?: (value: T | undefined) => void;
};

const RadioGroup: FC<Props> = ({ name, innerRef, defaultValue, onChange, children }) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <Fragment>
      <input type="hidden" name={name} ref={innerRef} value={value} />
      <AntRadio.Group defaultValue={defaultValue} onChange={e => setValue(e.target.value)}>
        {children}
      </AntRadio.Group>
    </Fragment>
  );
};

// FIXME
const Radio = AntRadio;
export { Radio };
export default RadioGroup;
