/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Grow, Stack, TextField } from "@mui/material";

export default function Module({ handle, label, objectName }) {
  const [vendor, setVendor] = useState("");
  const handleChange = (event) => {
    setVendor(event.target.value);
    handle((data) => ({ ...data, [objectName]: event.target.value }));
  };
  return (
    <TextField
      label={label}
      size="small"
      fullWidth
      value={vendor}
      onChange={handleChange}
    />
  );
}
