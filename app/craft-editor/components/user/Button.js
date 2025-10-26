import React from "react";
import {
  Button as MaterialButton,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useNode } from "@craftjs/core";

export const Button = ({
  size = "medium",
  variant = "contained",
  color = "primary",
  children = "Click me",
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
      sx={{ cursor: "move", mt: 1 }}
    >
      {children}
    </MaterialButton>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      {/* Size */}
      <FormControl size="small" component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          row
          value={props.size}
          onChange={(e) => setProp((props) => (props.size = e.target.value))}
        >
          <FormControlLabel
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>

      {/* Variant */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup
          row
          value={props.variant}
          onChange={(e) => setProp((props) => (props.variant = e.target.value))}
        >
          <FormControlLabel
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>

      {/* Color */}
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup
          row
          value={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
        >
          <FormControlLabel
            label="Default"
            value="default"
            control={<Radio size="small" color="default" />}
          />
          <FormControlLabel
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Secondary"
            value="secondary"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "medium",
    variant: "contained",
    color: "primary",
    children: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
