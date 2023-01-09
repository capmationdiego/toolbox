/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Grow, Stack } from "@mui/material";

export default function Module({ module, description, image }) {
  const moduleRouter = useRouter();
  const [pressed, setPressed] = useState(false);

  const onCardClick = async () => {
    setPressed(true);
    setTimeout(() => {
      // moduleRouter.push("/analisys");
    }, 400);
  };

  return (
    <Grow in={!pressed} mountOnEnter={false} unmountOnExit={false} timeout={400}>
      <Stack
        alignItems="center"
        onClick={() => onCardClick()}
        sx={{
          backgroundColor: "white",
          borderRadius: "6px",
          padding: 1,
          width: "300px",
          height: "300px",
          boxShadow: "0 1px 16px 0 #c3c4c2",
        }}
      >
        <img
          src={image}
          alt="Girl in a jacket"
          width="150"
          height="auto"
        />
        <Stack alignItems="center" padding={2.5}>
          <Typography variant="h5" component="div">
            {module}
          </Typography>
          <Typography color="text.secondary" alignContent="center" justifyContent="center">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Grow>
  );
}
