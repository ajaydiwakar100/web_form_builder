import React from "react";
import { Box } from "@mui/material";
import { useNode } from "@craftjs/core";

export const CardBottom = ({ padding = 16, background = "#fafafa", children }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <Box
      ref={(ref) => connect(drag(ref))}
      p={padding}
      sx={{ cursor: "move", backgroundColor: background, minHeight: 80 }}
    >
       {children} 
    </Box>
  );
};

CardBottom.craft = {
  displayName: "CardBottom",
  rules: { canMoveIn: () => true }, 
};
