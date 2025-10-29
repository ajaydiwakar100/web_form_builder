import React, { useState } from "react";
import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton,Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, } from "@mui/material";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';

export const Topbar = () => {
  const { actions, query, enabled, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState(null);

  return (
    <Box
      px={2}
      py={1}
      mt={3}
      mb={1}
      bgcolor="#cbe8e7"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      borderRadius={1}
    >
      {/* Toggle Edit Mode */}
      <FormControlLabel
        control={
          <Switch
            checked={enabled}
            onChange={(_, value) =>
              actions.setOptions((options) => (options.enabled = value))
            }
          />
        }
        label="Enable Edit Mode"
      />

      {/* Action Buttons */}
      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        {/* Undo / Redo */}
        <MaterialButton
          size="small"
          variant="outlined"
          color="primary"
          disabled={!canUndo}
          onClick={() => actions.history.undo()}
        >
          Undo
        </MaterialButton>

        <MaterialButton
          size="small"
          variant="outlined"
          color="primary"
          disabled={!canRedo}
          onClick={() => actions.history.redo()}
        >
          Redo
        </MaterialButton>

        {/* Copy State */}
        <MaterialButton
          className="copy-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => {
            const json = query.serialize();
            copy(lz.encodeBase64(lz.compress(json)));
            setSnackbarMessage("State copied to clipboard");
          }}
        >
          Copy State
        </MaterialButton>

        {/* Load State */}
        <MaterialButton
          className="load-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          Load State
        </MaterialButton>

        {/* --- New Buttons --- */}
        <MaterialButton
          size="small"
          variant="contained"
          color="success"
          onClick={() => alert("Save button clicked")}
        >
          Save
        </MaterialButton>

        <MaterialButton
          size="small"
          variant="contained"
          color="info"
          onClick={() => alert("Preview button clicked")}
        >
          Preview
        </MaterialButton>

        <MaterialButton
          size="small"
          variant="contained"
          color="warning"
          onClick={() => alert("Publish button clicked")}
        >
          Publish
        </MaterialButton>
      </Box>

      {/* Load Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Load Editor State</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            placeholder='Paste the state copied using "Copy State"'
            size="small"
            minRows={4}
            value={stateToLoad ?? ""}
            onChange={(e) => setStateToLoad(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <MaterialButton onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              try {
                if (!stateToLoad || !stateToLoad.trim()) {
                  setSnackbarMessage("Please paste a valid state string first");
                  return;
                }

                const decoded = lz.decompress(lz.decodeBase64(stateToLoad.trim()));
                if (!decoded) {
                  setSnackbarMessage("Invalid or corrupted state data");
                  return;
                }

                actions.deserialize(decoded);
                setSnackbarMessage("State loaded successfully");
                setDialogOpen(false);
              } catch (err) {
                console.error("Failed to load state:", err);
                setSnackbarMessage("Failed to load: Invalid state data");
              }
            }}
            color="primary"
            autoFocus
          >
            Load
          </MaterialButton>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!snackbarMessage}
        onClose={() => setSnackbarMessage(null)}
        message={<span>{snackbarMessage}</span>}
      />
    </Box>
  );
};
