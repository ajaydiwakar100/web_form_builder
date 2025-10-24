import { Box, Typography, Button as MaterialButton } from "@mui/material";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";


export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      {/* Title */}
      <Box pb={2} textAlign="center">
        <Typography>Drag to add</Typography>
      </Box>

      {/* Buttons stacked vertically */}
      <Box display="flex" flexDirection="column" gap={1}>
        <MaterialButton ref={ref=> connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained" fullWidth>
          Button
        </MaterialButton>
        <MaterialButton ref={ref=> connectors.create(ref, <Text text="Hi world" />)}  variant="contained" fullWidth>
          Text
        </MaterialButton>
        <MaterialButton ref={ref=> connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained" fullWidth>
          Container
        </MaterialButton>
        <MaterialButton ref={ref=> connectors.create(ref, <Card />)} variant="contained" fullWidth>
          Card
        </MaterialButton>
      </Box>
    </Box>
  );
};
