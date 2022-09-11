import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Paper } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

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
  value: string | number;
  fn: any;
  options: (string | number)[];
}

const Create = (): JSX.Element => {
  const page_title: string = "Create: Page";
  // Router
  const router = useRouter();
  // useState
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [age, setAge] = useState<string>("None");

  // Input's Function
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleChangeAge = (e: SelectChangeEvent) => {
    setAge(e.target.value);
  };

  // Function that is arg of ModalWithButton
  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    axios
      .post(
        Routes.B_POST_CREATE,
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
        router.replace(Routes.INDEX);
      });
  };

  const inputSet: inputType[] = [
    {
      type: "text",
      name: "title",
      default: "titleDefault",
      value: inputTitle,
      fn: handleChangeTitle,
      options: [],
    },
    {
      type: "text",
      name: "text",
      default: "textDefault",
      value: inputText,
      fn: handleChangeText,
      options: [],
    },
    {
      type: "select",
      name: "age",
      default: "selectDefault",
      value: age,
      fn: handleChangeAge,
      options: ["10's", "20's", "30's", "40's"],
    },
  ];

  return (
    <LayoutAuth>
      <Box component="div" sx={{ height: "100%", width: "100%", pt: 5, mt: 3 }}>
        <AppTitle page_title={page_title} />
        <Paper elevation={3} sx={{ p: 3 }}>
          {/* Inputs */}
          {inputSet.map((each: inputType) => {
            return (
              <InputWithLabel
                type={each.type}
                name={each.name}
                defaultVal={each.default}
                value={each.value}
                key={each.name}
                changeAction={each.fn}
                options={each.options}
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
