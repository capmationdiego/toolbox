import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { React, useState } from "react";
import { USERS_HASH_TABLE } from "../pages/homepage/HomepageConstants";

export default function Card() {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, isError] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setBackdrop(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    isError(false);
  };

  const handleLogin = () => {
    setBackdrop(true);
    setTimeout(() => {
      if (USERS_HASH_TABLE[username] === password) {
        router.push("/homepage");
      } else {
        isError(true);
        setBackdrop(false);
      }
    }, 800);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#3268a8", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Wrong credentials
        </Alert>
      </Snackbar>
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => handleLogin()}
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
