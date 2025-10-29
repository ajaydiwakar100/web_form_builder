// pages/index.js
"use client";
import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";
import { Topbar } from "./components/Topbar";

import { Container } from "./components/user/Container";
import { Button } from "./components/user/Button";
import { Card } from "./components/user/Card";
import { Text } from "./components/user/Text";
import { CardTop } from "./components/user/CardTop";
import { CardBottom } from "./components/user/CardBottom";

import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    
    <Box sx={{ margin: "0 auto", width: "100%", maxWidth: "1024px", p: 2}}>
      {/* Header */}
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>

     

      {/* Editor + Sidebar */}
      <Editor resolver={{ Card, Button, Text, Container,CardTop, CardBottom }}>
         {/* Topbar */}
        <Box sx={{ mt: 2 }}>
          <Topbar />
        </Box>
        <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
          {/* Main content area */}
          <Box sx={{ flex: 3 }}>
            <Frame>
              <Element
                is={Container}
                canvas
                padding={5}
                background="#eee"
              >
                <Card background="#fff" />
                <Button size="small" color="primary" variant="outlined">Click</Button>
                <Text text="Hi world!" />
                <Element
                  is={Container}
                  canvas
                  padding={6}
                  background="#999"
                >
                  <Text text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Box>

          {/* Sidebar */}
          <Box sx={{ flex: 1 }}>
            <Paper sx={{ p: 2, backgroundColor: "#eee" }}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Box>
        </Box>
      </Editor>
    </Box>  
  );
}
