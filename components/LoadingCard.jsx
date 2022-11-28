import RefreshIcon from "@mui/icons-material/Refresh";
import {
  CircularProgress,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { React } from "react";

// eslint-disable-next-line react/prop-types
export default function LoadingCard({ handle }) {
  return (
    <div>
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
          <div>&nbsp;</div>
          <IconButton onClick={() => handle()}>
            <RefreshIcon />
          </IconButton>
        </Stack>
        <Divider />
        <Stack sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20%",
        }}
        >
          <CircularProgress />
        </Stack>
      </Stack>
    </div>
  );
}
