/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { React, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";

export default function Card() {
  const [artObject, setArtObject] = useState();
  const [loading, isLoading] = useState(true);
  const totalArtObjects = 4000;

  const randomObjectID = () => Math.floor(Math.random() * (totalArtObjects) + 10);

  const fetchArtObject = async (objectID) => {
    isLoading(true);
    await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== "ObjectID not found") {
          if (res.primaryImageSmall !== "") {
            setArtObject(res);
          }
        }
      }).finally(() => isLoading(false));
  };

  const handleIconClick = () => {
    fetchArtObject(randomObjectID());
  };

  useEffect(() => {
    fetchArtObject(randomObjectID());
  }, []);
  return (

    <div>
      {!loading ? (
        <Stack
          sx={{
            boxShadow: "0px 1px 15px 0 var(--shadow-box)",
            borderRadius: "6px",
            backgroundColor: "white",
            width: "350px",
            height: "250px",
            padding: "25px",
          }}
          spacing={1}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" noWrap>
              {artObject ? artObject.title : ""}
            </Typography>
            <IconButton onClick={() => handleIconClick()}>
              <RefreshIcon />
            </IconButton>
          </Stack>
          <Divider />
          {artObject ? (
            <img
              src={artObject.primaryImageSmall}
              alt={artObject.title}
              style={{
                height: "80%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          ) : (null)}
        </Stack>
      ) : (
        <LoadingCard handle={handleIconClick} />
      )}

    </div>
  );
}
