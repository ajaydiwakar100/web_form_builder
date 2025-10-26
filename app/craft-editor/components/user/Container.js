import React from "react";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";
import { useNode } from "@craftjs/core";
import { HexColorPicker } from "react-colorful";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      {/* Background color picker */}
      <FormControl fullWidth margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <HexColorPicker
          color={background || "#ffffff"}
          onChange={(color) => setProp((props) => (props.background = color))}
        />
      </FormControl>

      {/* Padding slider */}
      <FormControl fullWidth margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          value={padding ?? 0} // ✅ Controlled
          step={1}
          min={0}
          max={100}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  displayName: "Container",
  props: ContainerDefaultProps,
  rules: {
    canMoveIn: () => true,
  },
  related: {
    settings: ContainerSettings,
  },
};
