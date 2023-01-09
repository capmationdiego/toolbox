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
import LoadingCard from "./LoadingCard";

export default function Card() {
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

    <div>
      <Stack
        sx={{
          boxShadow: "0px 1px 15px 0 var(--shadow-box)",
          borderRadius: "6px",
          backgroundColor: "white",
          width: "250px",
          height: "auto",
          padding: "25px",
        }}
        spacing={2}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <img
            src="img/logo.png"
            alt="Girl in a jacket"
            width="150"
            height="auto"
          />
          <Typography variant="h5" noWrap>
            Welcome!
          </Typography>
        </Stack>
        <Divider />
        <TextField
          label="Username"
          size="small"
        />
        <TextField
          label="Password"
          type="password"
          size="small"
        />
        <Button
          variant="contained"
          sx={{
            textTransform: "none !important",
            backgroundColor: "#3268a8",
            "&:hover": {
              background: "#3a74ba !important",
            },
          }}
        >
          Login
        </Button>
      </Stack>

    </div>
  );
}
