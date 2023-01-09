/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Grid,
  Stack,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Module from "../../components/Module";

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
        backgroundColor: "var(--main-background)",
      }}
      direction="column"
      spacing={1}
    >
      <NavigationBar />
      <Stack
        sx={{
          backgroundColor: "var(--main-background)",
        }}
        direction="row"
        spacing={1}
      >
        Analisys
      </Stack>
    </Stack>
  );
}
