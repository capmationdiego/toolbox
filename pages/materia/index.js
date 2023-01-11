/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import Resultados from "../../components/Resultados";

export default function Homepage() {
  const [parameters, setParameters] = useState({});
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    if (resultados) {
      console.log(resultados);
    }
  }, [resultados]);

  const fetchObject = async () => {
    await fetch(`http://127.0.0.1:5000/recomendacionid`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 55 }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResultados(res);
      }).finally();
  };

  useEffect(() => {
    fetchObject();
  }, []);
  return (
    <Stack
      sx={{
        backgroundColor: "var(--main-background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      direction="column"
      spacing={1}
    >
      <NavigationBar />
      <Typography variant="h5" noWrap>
        Resumen académico por materia
      </Typography>
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
          Menor puntuación
        </Typography>
        <Divider sx={{ marginBottom: "10px", width: "100%" }} />
        <Stack direction="row" width="100%" spacing={1}>
          <Stack direction="column" spacing={1} width="100%">
            <TextField
              label="Actividad 1"
              size="small"
              value={resultados ? resultados.Act1 : ""}
            />
            <TextField
              label="Actividad 2"
              size="small"
              value={resultados ? resultados.Act2 : ""}
            />
            <TextField
              label="Actividad 3"
              size="small"
              value={resultados ? resultados.Act3 : ""}
            />
          </Stack>
        </Stack>
      </Stack>
      {resultados && (
        <Resultados resultado={resultados} />
      )}
    </Stack>
  );
}
