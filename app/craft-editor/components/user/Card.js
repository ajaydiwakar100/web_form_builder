import React from "react";
import { Paper } from "@mui/material";
import { Element, useNode } from "@craftjs/core";
import { CardTop } from "./CardTop";
import { CardBottom } from "./CardBottom";

export const Card = ({ background = "#fff" }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      elevation={3}
      sx={{
        background,
        borderRadius: 2,
        overflow: "hidden",
        width: "100%",
        cursor: "move",
      }}
    >
      <CardTop />
      <Element is={CardBottom} id="card-bottom" canvas />
    </Paper>
  );
};

Card.craft = {
  displayName: "Card",
};
