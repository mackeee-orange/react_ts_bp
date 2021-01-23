import React, { FC } from "react";
import BaseButton, { ButtonProps } from "../BaseButton";

export const ActionButton: FC<ButtonProps> = props => {
  return (
    <BaseButton {...props} shape="roundSquare">
      {props.children}
    </BaseButton>
  );
};
