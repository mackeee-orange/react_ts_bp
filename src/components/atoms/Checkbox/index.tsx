import { Checkbox as AntCheckbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React, { FC, Fragment, useCallback, useState } from "react";

type Props = {
  label: string;
  name?: string;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: boolean;
  checked?: boolean;
  disable?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

// TODO: 各propsの有効化
const Checkbox: FC<Props> = ({
  checked,
  label,
  name,
  innerRef,
  defaultValue,
  disable,
  onChange,
  className
}) => {
  const [value, setValue] = useState<boolean>(defaultValue || false);
  const onAntChange = useCallback<(e: CheckboxChangeEvent) => void>(e => {
    e.preventDefault();
    setValue(e.target.checked);
    onChange?.(e.target.checked);
  }, []);
  return (
    <Fragment>
      {name && <input type="hidden" name={name} ref={innerRef} value={String(value)} />}
      <AntCheckbox
        checked={checked}
        onChange={onAntChange}
        defaultChecked={defaultValue || false}
        disabled={disable}
        className={className}
        style={{ margin: 0 }}
      >
        {label}
      </AntCheckbox>
    </Fragment>
  );
};

export default Checkbox;
