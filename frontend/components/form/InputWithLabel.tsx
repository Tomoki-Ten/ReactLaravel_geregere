import React, { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";

interface Props {
  name: string;
  defaultVal?: string | number | boolean;
  // key?: string;
  changeAction?: any;
}

const InputWithLabel = (props: Props): JSX.Element => {
  const { name, defaultVal, changeAction } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("@argSide");
    changeAction(e);
  };

  // replace to Library
  const firstChar = name.charAt(0).toUpperCase();
  const charsRest = name.slice(1);
  const nameDisplayed = firstChar + charsRest;

  return (
    <Grid container spacing={3} sx={{ pb: 3 }}>
      <Grid item xs={3}>
        <Typography
          variant="h6"
          sx={{
            verticalAlign: "center",
            color: "rgba(0, 0, 0, 0.54)",
          }}
        >
          {nameDisplayed} :
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <TextField
          id={name}
          label={nameDisplayed}
          size="small"
          variant="outlined"
          onChange={(e) => changeAction(e)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default InputWithLabel;
