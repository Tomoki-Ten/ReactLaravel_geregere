import React, { useState } from "react";
import axios from "axios";
import { Box, Paper, Grid, Typography, TextField } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layouts/LayoutAuth";
import InputWithLabel from "../../../components/forms/InputWithLabel";
import Routes from "../../../routes/routes";

// const theme = createTheme({
//   typography: {
//     verticalAlign: "center",
//   },
// });

interface inputType {
  type?: string;
  name?: string;
}

const Create = (): JSX.Element => {
  const page_title: string = "Create Page";

  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [inputCheck, setInputCheck] = useState<number[]>([]);
  const [inputBool, setInputBool] = useState<boolean>(false);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputTitle);
    setInputTitle(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputText);
    setInputText(e.target.value);
  };

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputCheck);
    console.log(e.target.checked);

    setInputCheck({
      ...inputCheck,
      [e.target.id]: e.target.value,
    });
  };

  const handleClickCheck = () => {
    console.log("title: ", inputTitle);
    console.log("text: ", inputText);
    console.log("check: ", inputCheck);
    console.log("bool: ", inputBool);
  };

  const handleClickCreate = () => {
    console.log("handleClickCreate");
    axios
      .post(
        Routes.POST_CREATE,
        {
          name: 0,
          title: inputTitle,
          text: inputText,
          // check: inputCheck,
          bool: inputBool,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("handleClickCreate: then: ", response);
      })
      .catch((response) => {
        console.log("handleClickCreate: catch: ", response);
      });
  };

  const inputSet: inputType[] = [
    {
      type: "text",
      name: "title",
    },
    {
      type: "text",
      name: "text",
    },
    {
      type: "select",
      name: "tel",
    },
  ];

  return (
    <LayoutAuth>
      <AppTitle page_title={page_title} />
      <Box component="div">
        <Paper elevation={3} sx={{ px: 3 }}>
          {inputSet.map((item: inputType) => {
            return (
              <InputWithLabel
                name={item.name ? item.name : "default"}
                key={item.name ? item.name : "default"}
              />
            );
          })}
        </Paper>
      </Box>
      {/* TODO: Send Data to backend with Axios!! */}
    </LayoutAuth>
  );
};

export default Create;
