import PureCheckbox from "components/atoms/Checkbox";
import React, { Dispatch, FC, useCallback, useContext, useEffect, useReducer } from "react";

type State = {
  multiple?: boolean;
  selectValues: string[] | undefined;
};
type CheckboxGroupContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
const CheckboxGroupContext = React.createContext<CheckboxGroupContextType>(
  {} as CheckboxGroupContextType
);

export type CheckboxGroupProps = {
  name?: string;
  multiple?: boolean;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: string[];
  onChange?: (value: string[] | undefined) => void;
};

type CheckboxProps = {
  label: string;
  value: string;
  disable?: boolean;
  className?: string;
};

function checkboxGroupReducer(state: State, action: Action): State {
  const idx = state.selectValues?.findIndex(v => v === action.payload);
  switch (action.type) {
    case "checked": {
      if (idx === -1 || idx === undefined) {
        /// すでにチェックされたデータがなかった場合は追加
        if (state.multiple) {
          return {
            ...state,
            selectValues: [...(state.selectValues || []), action.payload as string]
          };
        } else {
          return { ...state, selectValues: [action.payload as string] };
        }
      }
      return state;
    }
    case "unchecked": {
      if (idx === -1 || idx === undefined) return state;

      const newVal = [...(state.selectValues || [])];
      newVal.splice(idx, 1);
      /// valuesに残ってたら消す
      return { ...state, selectValues: newVal };
    }
    default:
      return state;
  }
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  innerRef,
  multiple,
  defaultValue,
  onChange,
  children
}) => {
  const [state, dispatch] = useReducer(checkboxGroupReducer, {
    multiple,
    selectValues: defaultValue
  });
  useEffect(() => {
    onChange?.(state.selectValues);
  }, [state.selectValues]);

  return (
    <CheckboxGroupContext.Provider value={{ state, dispatch }}>
      <input type="hidden" name={name} ref={innerRef} value={state.selectValues} />
      {children}
    </CheckboxGroupContext.Provider>
  );
};

export const Checkbox: FC<CheckboxProps> = ({ label, value, disable, className }) => {
  const { state, dispatch } = useContext(CheckboxGroupContext);
  const { selectValues } = state;
  const idx = selectValues?.findIndex(v => v === value);

  const onChange = useCallback(
    (checked: boolean) => {
      if (checked) {
        dispatch({ type: "checked", payload: value });
      } else {
        dispatch({ type: "unchecked", payload: value });
      }
    },
    [selectValues]
  );

  return (
    <PureCheckbox
      checked={idx !== undefined ? idx > -1 : false}
      label={label}
      onChange={onChange}
      disable={disable}
      className={className}
    />
  );
};

export default CheckboxGroup;
