import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
// import { MoreVertIcon } from "@mui/icons"
import * as COMMON_W from "../../constant/word/common";
import * as ERROR_W from "../../constant/word/error";

const CardLoginSample = (): JSX.Element => {
  //
  const isErrorLoginId: boolean = false;
  const isErrorPassword: boolean = true;

  //
  const helperTextLoginId: string = isErrorLoginId
    ? `${COMMON_W.LOGIN}${ERROR_W.REQUIRED}`
    : "";
  const helperTextPassword: string = isErrorPassword
    ? `${COMMON_W.PASSWORD}${ERROR_W.REQUIRED}`
    : "";

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="sample">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Card Header Title"
        subheader="Card Sub Header, 07, 10, 2022"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image="/img/nextjs_logo.png"
        alt="Sample Image"
      />
      <CardContent>
        <TextField
          error={isErrorLoginId}
          helperText={helperTextLoginId}
          fullWidth
          id="loginId"
          label={`${COMMON_W.LOGIN_ID}`}
          variant="outlined"
          margin="dense"
        />
        <TextField
          error={isErrorPassword}
          helperText={helperTextPassword}
          fullWidth
          type="password"
          id="password"
          label={`${COMMON_W.PASSWORD}`}
          variant="outlined"
          margin="dense"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Button
            fullWidth
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => {
              alert("Hey!!");
              console.log("Hey!!");
            }}
          >
            {COMMON_W.LOGIN}
          </Button>
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum
          fugit in ipsa rerum culpa, quis magni unde porro laudantium, velit
          nulla voluptatum nisi? Eum temporibus quidem impedit perspiciatis
          voluptatibus?
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default CardLoginSample;
