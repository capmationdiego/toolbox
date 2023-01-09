/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Button,
  Divider,
  Stack, TextField, Typography,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import Actividad from "../../components/Actividad";

export default function Homepage() {
  const [parameters, setParameters] = useState({});
  // const randomObjectID = () => Math.floor(Math.random() * (totalArtObjects) + 10);

  // const fetchArtObject = async (objectID) => {
  //   isLoading(true);
  //   await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.message !== "ObjectID not found") {
  //         if (res.primaryImageSmall !== "") {
  //           setArtObject(res);
  //         }
  //       }
  //     }).finally(() => isLoading(false));
  // };

  // const handleIconClick = () => {
  //   fetchArtObject(randomObjectID());
  // };

  // useEffect(() => {
  //   fetchArtObject(randomObjectID());
  // }, []);

  useEffect(() => {
    console.log(parameters);
  }, [parameters]);
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
          Ingresa tus calificaciones
        </Typography>
        <Divider sx={{ marginBottom: "10px", width: "100%" }} />
        <Stack direction="row" width="100%" spacing={1}>
          <Stack direction="column" spacing={1} width="100%">
            <Actividad handle={setParameters} label="Actividad 1" objectName="A1" />
            <Actividad handle={setParameters} label="Actividad 2" objectName="A2" />
            <Actividad handle={setParameters} label="Actividad 3" objectName="A3" />
            <Actividad handle={setParameters} label="Actividad 4" objectName="A4" />
            <Actividad handle={setParameters} label="Actividad 5" objectName="A5" />
            <Actividad handle={setParameters} label="Actividad 6" objectName="A6" />
            <Actividad handle={setParameters} label="Actividad 7" objectName="A7" />
          </Stack>
          <Stack direction="column" spacing={1} width="100%">
            <Actividad handle={setParameters} label="Actividad 8" objectName="A8" />
            <Actividad handle={setParameters} label="Actividad 9" objectName="A9" />
            <Actividad handle={setParameters} label="Actividad 10" objectName="A10" />
            <Actividad handle={setParameters} label="Actividad 10" objectName="A10" />
            <Actividad handle={setParameters} label="Actividad 11" objectName="A11" />
            <Actividad handle={setParameters} label="Actividad 12" objectName="A12" />
            <Actividad handle={setParameters} label="Actividad 13" objectName="A13" />
          </Stack>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        sx={{
          textTransform: "none !important",
          width: "90%",
          backgroundColor: "#3268a8",
          "&:hover": {
            background: "#3a74ba !important",
          },
        }}
      >
        Analizar
      </Button>
    </Stack>
  );
}
