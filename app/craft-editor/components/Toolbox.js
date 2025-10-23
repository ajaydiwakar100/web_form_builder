import { Box, Typography, Button as MaterialButton } from "@mui/material";

export const Toolbox = () => {
  return (
    <Box px={2} py={2}>
      {/* Title */}
      <Box pb={2} textAlign="center">
        <Typography>Drag to add</Typography>
      </Box>

      {/* Buttons stacked vertically */}
      <Box display="flex" flexDirection="column" gap={1}>
        <MaterialButton variant="contained" fullWidth>
          Button
        </MaterialButton>
        <MaterialButton variant="contained" fullWidth>
          Text
        </MaterialButton>
        <MaterialButton variant="contained" fullWidth>
          Container
        </MaterialButton>
        <MaterialButton variant="contained" fullWidth>
          Card
        </MaterialButton>
      </Box>
    </Box>
  );
};
