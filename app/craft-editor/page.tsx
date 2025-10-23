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

import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    
    <Box sx={{ margin: "0 auto", width: 960, p: 2 }}>
        {/* Header */}
        <Typography variant="h5" align="center">
            A super simple page editor
        </Typography>

        {/* Topbar */}
        <Box sx={{ mt: 2 }}>
            <Topbar />
        </Box>

        {/* Editor + Sidebar */}
        <Editor resolver={{ Card, Button, Text, Container }}>
            <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
            {/* Main content area */}
            <Box sx={{ flex: 3 }}>
                <Frame>
                    <Container padding={5} background="#eee">
                        <Card title="Hello" subTitle="Welcome" background="#fff"/>
                            <Button size="small" variant="contained"   color="primary">
                                Click
                            </Button>
                        <Text text="Hi world!"/>
                            <Container padding={6} background="#999">
                        {/* <Text fontSize="small" text="It's me again!" /> */}
                        <Text  text="It's me again!" /> 
                        </Container>
                    </Container>
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
