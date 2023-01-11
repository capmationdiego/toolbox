/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Grid,
  Stack,
} from "@mui/material";
import { React } from "react";
import NavigationBar from "../../components/NavigationBar";
import { MODULES, MODULE_IMAGE, MODULE_DESCRIPTION } from "./HomepageConstants";
import Module from "../../components/Module";

export default function Homepage() {
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
        <Grid
          container
          rowSpacing={1}
          textAlign="center"
          justifyContent="center"
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          paddingLeft="1%"
          paddingRight="1%"
          display="flex"
        >
          {MODULES.map((module) => (
            <Grid item key={module}>
              <Module
                module={module}
                description={MODULE_DESCRIPTION[module]}
                image={MODULE_IMAGE[module]}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
