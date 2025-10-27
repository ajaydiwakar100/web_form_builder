import React from "react";
import { Box, Chip, Typography, Button as MaterialButton } from "@mui/material";
import { useEditor } from "@craftjs/core";

export const SettingsPanel = () => {
  const { actions, query, selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
      };
    }

    return { selected };
  });

  return selected ? (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2} borderRadius={2}>
      {/* Header section */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          Selected
        </Typography>
        <Chip size="small" color="primary" label={selected.name} />
      </Box>

      {/* Render settings if available */}
      {selected.settings && (
        <Box mb={2}>{React.createElement(selected.settings)}</Box>
      )}

      {/* ✅ Show delete button except for CardBottom */}
      {selected.name !== "CardBottom" && (
        <Box>
          <MaterialButton
            variant="contained"
            color="error"
            fullWidth
            onClick={() => {
              const node = query.node(selected.id).get();
              if (node.data.parent === null || node.rules?.canDelete === false) {
                alert("You cannot delete the root or a non-deletable node!");
                return;
              }
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        </Box>
      )}
    </Box>
  ) : null;
};
