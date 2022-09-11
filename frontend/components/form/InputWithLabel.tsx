import React from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";

export interface InputWithLabelProps {
  type: string;
  className?: string;
  name: string;
  defaultVal?: string | number | boolean;
  key?: string;
  value: string | number;
  changeAction?: any;
  options?: (string | number)[];
}

const InputWithLabel = (props: InputWithLabelProps): JSX.Element => {
  const { type, className, name, defaultVal, value, changeAction, options } =
    props;

  // Replace to Library
  const firstChar = name.charAt(0).toUpperCase();
  const charsRest = name.slice(1);
  const nameDisplayed = firstChar + charsRest;

  const SelectedInput = () => {
    switch (type) {
      case "text":
        return (
          <TextField
            className={className}
            id={name}
            label={nameDisplayed}
            size="small"
            variant="outlined"
            onChange={(e) => changeAction(e)}
            fullWidth
          />
        );
      case "select":
        return (
          // <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <FormControl size="small" sx={{ width: "100%" }}>
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select
              labelId={nameDisplayed}
              className={className}
              id={name}
              label="Age"
              value={value}
              onChange={(e) => changeAction(e)}
            >
              <MenuItem value="None" key="None">
                <em>None</em>
              </MenuItem>
              {options &&
                options.map((m) => (
                  <MenuItem value={m} key={m}>
                    {m}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        );
    }
  };

  return (
    <Grid container spacing={3} key={name} sx={{ pb: 2 }}>
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
        {SelectedInput()}
      </Grid>
    </Grid>
  );
};

export default InputWithLabel;
