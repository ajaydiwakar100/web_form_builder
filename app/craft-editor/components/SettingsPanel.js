import { Box, Chip, Typography, Button as MaterialButton, FormControl, FormLabel, Slider } from "@mui/material";

export const SettingsPanel = () => {
  return (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2} display="flex" flexDirection="column" gap={2}>
      
      {/* Selected Header */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Selected</Typography>
        <Chip size="small" color="primary" label="Selected" />
      </Box>

      {/* Slider */}
      <FormControl fullWidth size="small" component="fieldset">
        <FormLabel component="legend">Prop</FormLabel>
        <Slider
          defaultValue={0}
          step={1}
          min={7}
          max={50}
          valueLabelDisplay="auto"
        />
      </FormControl>

      {/* Delete Button */}
      <MaterialButton variant="contained" color="default"  sx={{ width: "100%" }} >
        Delete
      </MaterialButton>
    </Box>
  );
};
