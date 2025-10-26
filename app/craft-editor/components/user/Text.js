// components/user/Text.js
import React from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { FormControl, FormLabel, Slider } from "@mui/material";

export const Text = ({
  text = "Edit me",
  fontSize = 18,
  textAlign = "center",
}) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    isActive,
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        cursor: "move",
        padding: "8px 16px",
        background: "#fff",
        border: isActive ? "2px solid #2196f3" : "1px solid #ddd",
        borderRadius: "6px",
        display: "inline-block",
        margin: "5px 0",
      }}
    >
      <ContentEditable
        html={text}
        disabled={!isActive}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign, margin: 0 }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <FormControl size="small" component="fieldset" sx={{ width: "100%", mt: 2 }}>
      <FormLabel component="legend">Font Size</FormLabel>
      <Slider
        value={fontSize || 18}
        step={1}
        min={8}
        max={72}
        onChange={(_, value) => setProp((props) => (props.fontSize = value))}
        sx={{ width: "90%", mt: 1 }}
      />
    </FormControl>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Edit me",
    fontSize: 18,
    textAlign: "center",
  },
  related: {
    settings: TextSettings,
  },
};
