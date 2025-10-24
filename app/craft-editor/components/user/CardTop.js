import React from "react";
import { Box, Typography } from "@mui/material";
import { useNode } from "@craftjs/core";

export const CardTop = ({ title = "Card Title", subTitle = "Subtitle" }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <Box
      ref={(ref) => connect(drag(ref))}
      p={2}
      borderBottom="1px solid #ddd"
      sx={{ cursor: "move" }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{subTitle}</Typography>
    </Box>
  );
};

CardTop.craft = {
  displayName: "CardTop",
};
