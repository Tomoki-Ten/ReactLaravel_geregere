import { Grid, Typography, TextField } from "@mui/material";

interface Props {
  name: string;
}

const InputWithLabel = (props: Props): JSX.Element => {
  const { name } = props;
  const inputVariant = "h6";

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
        <TextField id={name} label={name} size="small" variant="outlined" />
      </Grid>
    </Grid>
  );
};

export default InputWithLabel;
