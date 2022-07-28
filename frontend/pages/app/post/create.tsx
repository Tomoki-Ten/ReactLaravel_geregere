import React, { useState } from "react";
import axios from "axios";
import Routes from "../../../routes/routes";
import AppTitle from "../../../components/AppTitle";
import LayoutAuth from "../../../components/layouts/LayoutAuth";

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

  return (
    <LayoutAuth>
      <AppTitle page_title={page_title} />
      <div>
        <form method="POST" action="">
          {/* USER */}
          <div>
            <label htmlFor="input_user">USER: </label>
            <input type="text" name="" id="input_user"></input>
          </div>
          {/* TITLE */}
          <div>
            <label htmlFor="input_title">TITLE: </label>
            <input
              type="text"
              name="title"
              id="input_title"
              onChange={(e) => handleChangeTitle(e)}
            ></input>
          </div>
          {/* TEXT */}
          <div>
            <label htmlFor="input_text">TEXT: </label>
            <input
              type="text"
              name="text"
              id="input_text"
              onChange={(e) => handleChangeText(e)}
            ></input>
          </div>
          {/* CHECK */}
          {/* BOOL */}
          <div>
            <label htmlFor="input_bool_true">
              TRUE:
              <input type="radio" name="bool" id="input_bool_true"></input>
            </label>
            <label htmlFor="input_bool_false">
              FALSE:
              <input type="radio" name="bool" id="input_bool_false"></input>
            </label>
          </div>
          <div>
            <button type="button" onClick={handleClickCreate}>
              Create
            </button>
            <button type="button" onClick={handleClickCheck}>
              Check Inputs
            </button>
          </div>
        </form>
      </div>
    </LayoutAuth>
  );
};

export default Create;
