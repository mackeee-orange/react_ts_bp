import React, { FC } from "react";
import BaseButton, { ButtonProps } from "../BaseButton";

export const ContainButton: FC<ButtonProps> = props => (
  <BaseButton size={"md"} {...props} shape="square">
    {props.children}
  </BaseButton>
);
