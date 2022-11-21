import {
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { React, useState } from "react";

export default function Card() {
  const [bookmarkIconColor, setBookmarkIconColor] = useState("gray");

  const handleIconClick = () => {
    if (bookmarkIconColor === "gray") {
      setBookmarkIconColor("var(--bookmarked)");
    } else {
      setBookmarkIconColor("gray");
    }
  };

  return (
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
        <Typography variant="h5">
          Lorem Ipsum
        </Typography>
        <IconButton onClick={() => handleIconClick()}>
          <BookmarkIcon sx={{
            color: bookmarkIconColor,
          }}
          />
        </IconButton>
      </Stack>
      <Divider />
      <Typography variant="subtitle2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem justo, sagittis vel
        consectetur viverra, sodales nec erat. Quisque condimentum rutrum vestibulum. Nam sed
        tincidunt sem, eu volutpat quam. Sed mattis lobortis arcu hendrerit pharetra. Aenean
        placerat eget erat sed ultrices. Aenean congue pharetra nunc, a euismod massa posuere
        ac. Sed iaculis varius mattis. Donec fringilla bibendum mauris, a aliquet purus.
      </Typography>
    </Stack>
  );
}
