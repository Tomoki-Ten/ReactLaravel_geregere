import React, { useState } from "react";
import axios from "axios";
import { Button, Box, Paper, Grid, Typography, TextField } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import InputWithLabel from "../../../components/form/InputWithLabel";
import ModalWithButton from "../../../components/modal/ModalWithButton";

import store from "../../../store/index";

export interface inputType {
  type: string;
  name: string;
  default: string | number | boolean;
  value: string | number | boolean;
  fn: any;
}

const Create = (): JSX.Element => {
  const page_title: string = "Create Page";

  // useState
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  // Input's Function
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Function that is arg of ModalWithButton
  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("@handleRegister");
    axios
      .post(
        Routes.POST_CREATE,
        {
          name: 0,
          title: inputTitle,
          text: inputText,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("@register: then: ", response);
      })
      .catch((response) => {
        console.log("@register: catch: ", response);
      });
  };

  const inputSet: inputType[] = [
    {
      type: "text",
      name: "title",
      default: "titleDefault",
      value: inputText,
      fn: handleChangeTitle,
    },
    {
      type: "text",
      name: "text",
      default: "textDefault",
      value: inputTitle,
      fn: handleChangeText,
    },
  ];

  const gState = () => {
    console.log("@gState");
    console.log(store.getState());
  };

  return (
    <LayoutAuth>
      <AppTitle page_title={page_title} />
      <Box component="div">
        <Paper elevation={3} sx={{ p: 3 }}>
          {/* Inputs */}
          {inputSet.map((each: inputType) => {
            return (
              <InputWithLabel
                name={each.name}
                defaultVal={each.default}
                key={each.name}
                changeAction={each.fn}
              />
            );
          })}
          {/* Confirm Modal */}
          <ModalWithButton data={inputSet} btnAction={handleRegister} />
        </Paper>
      </Box>
    </LayoutAuth>
  );
};

export default Create;
