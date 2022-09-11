import React, { useState } from "react";
import axios from "axios";
import Routes from "../../routes/routes";
import { Box, Paper, Button, Grid } from "@mui/material";
import InputWithLabel, { InputWithLabelProps } from "./InputWithLabel";

interface Props {
  cols: InputWithLabelProps[];
  // handleSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setPosts: any;
}

const SearchForm = (props: Props) => {
  const { cols, setPosts } = props;

  // useState
  const [inputSearch, setInputSearch] = useState<Object>({});

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    axios
      .post(
        Routes.POST_LIST,
        {
          inputSearch,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("@success.res: ", res);
        setPosts(res.data.posts);
      })
      .catch((res) => {
        console.log("@catch.res: ", res);
      });
  };

  const handleChangeAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputSearch[e.target.id] = e.target.value;
    setInputSearch(inputSearch);
  };

  const handleClear = (): void => {
    // TODO: To Write Clear Program and replace codes below to it.
    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach((input: HTMLInputElement) => {
      input.value = "";
    });

    setInputSearch({});
  };

  return (
    <Box mb={3}>
      <Paper sx={{ py: 2 }} variant="outlined">
        {cols.map((col: InputWithLabelProps, index: number) => {
          return (
            <Grid sx={{ mx: 2 }} key={col.key}>
              <InputWithLabel
                type={col.type}
                className="search-form"
                name={col.name}
                key={col.key}
                value={col.value}
                options={col.options && col.options}
                changeAction={(e) => handleChangeAction(e)}
              />
            </Grid>
          );
        })}
        {/* Buttons */}
        <Grid container mr={3} sx={{ justifyContent: "end" }}>
          <Grid mr={3}>
            <Button variant="outlined" onClick={() => handleClear()}>
              Clear
            </Button>
          </Grid>
          <Grid mr={3}>
            <Button variant="contained" onClick={(e) => handleSearch(e)}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SearchForm;
