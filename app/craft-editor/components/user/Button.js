import {Button as MaterialButton} from "@mui/material";
import { useNode } from "@craftjs/core";

export const Button = ({ size = "medium", variant = "contained", color = "primary", children = "Click me"}) => {
  const { connectors: {connect, drag} } = useNode();
  return (
    <MaterialButton  ref={ ref => connect(drag(ref))}  size={size} variant={variant} color={color}  
    sx={{ cursor: "move", mt: 1 }} >
      {children}
    </MaterialButton>
  )
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "medium",
    variant: "contained",
    color: "primary",
    children: "Click me",
  },
};