/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { React, useEffect, useState } from "react";

export default function Homepage() {
  const [artObject, setArtObject] = useState();
  const [loading, isLoading] = useState(true);
  const totalArtObjects = 4000;

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
      Homepage
    </Stack>
  );
}
