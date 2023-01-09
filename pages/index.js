import { Stack } from "@mui/material";
import React from "react";
import Card from "@components/Card";

export default function Home() {
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundColor: "var(--main-background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      direction="row"
      spacing={1}
    >
      <Card />
    </Stack>
  );
}
