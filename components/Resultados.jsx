/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { React } from "react";

export default function Homepage({ resultado }) {
  return (
    <Stack
      alignItems="center"
      direction="column"
      spacing={0}
      sx={{
        backgroundColor: "white",
        borderRadius: "6px",
        padding: 1,
        width: "90%",
        height: "auto",
        maxWidth: "1500px",
        boxShadow: "0 1px 16px 0 #c3c4c2",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" noWrap>
        Resultados
      </Typography>
      <Divider sx={{ marginBottom: "10px", width: "100%" }} />
      {resultado.resultado1 && (
      <Typography variant="subtitle1" noWrap>
        1.
        {" "}
        {resultado.resultado1}
      </Typography>
      )}
      {resultado.resultado2 && (
      <Typography variant="subtitle1" noWrap>
        2.
        {" "}
        {resultado.resultado2}
      </Typography>
      )}
      {resultado.resultado3 && (
      <Typography variant="subtitle1" noWrap>
        3.
        {" "}
        {resultado.resultado3}
      </Typography>
      )}

    </Stack>
  );
}
