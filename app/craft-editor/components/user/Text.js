// components/user/Text.js
import React from "react";
import { Typography } from "@mui/material";
import { useNode } from "@craftjs/core";

export const Text = ({text = "Edit me"}) => {
  const { connectors: {connect, drag} } = useNode();
  return (
     <div 
      ref={ref => connect(drag(ref))}
      style={{
        cursor: "move",
        padding: "8px 16px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "6px",
        display: "inline-block",
        margin: "5px 0",
      }}
    >
      <p>{text}</p>
    </div>
  )
};

Text.craft = {
  displayName: "Text",
};