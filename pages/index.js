import { Stack } from "@mui/material";
import React from "react";
import Card from "@components/Card";

export default function Home() {
  return (
    <Stack
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "var(--main-background)",
        padding: "15px",
      }}
      direction="row"
      spacing={1}
    >
      <Card />
    </Stack>
  );
}
