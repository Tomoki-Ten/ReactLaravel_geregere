import React from "react";
import { Button } from "@mui/material";

interface ButtonSampleProps {
  variant?: string;
  color?: string;
  children?: React.ReactNode;
  clickAction?: any;
  disabled?: string;
}

const ButtonSample = (props: ButtonSampleProps): JSX.Element => {
  const {
    variant = props.variant || "contained",
    color = props.color || "primary",
    children = props.children || "Button",
    clickAction = props.clickAction || undefined,
    disabled = props.disabled,
  } = props;

  if (!disabled) {
    return (
      <Button variant={variant} color={color} onClick={clickAction}>
        {children}
      </Button>
    );
  } else {
    return (
      <Button variant={variant} color={color} onClick={clickAction} disabled>
        {children}
      </Button>
    );
  }
};

export default ButtonSample;
