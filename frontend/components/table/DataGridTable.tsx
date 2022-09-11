import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  // GridValueGetterParams,
  GridToolbar,
  jaJP,
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Post } from "../../pages/app/post/Dashboard";
import Routes from "../../routes/routes";

import store from "../../store/index";

interface Props {
  posts: Post[];
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    // flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
    // flex: 1,
  },
  {
    field: "text",
    headerName: "Text",
    // width: auto,
    sortable: true,
    description: "description sample",
    // valueGetter: (params: GridValueGetterParams) =>
    // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    flex: 1,
  },
];
// Japanese
const theme = createTheme({}, jaJP);

const DataGridTable = (props: Props): JSX.Element => {
  const { posts } = props;
  // useRouter
  const router = useRouter();
  // Redux
  const dispatch = useDispatch();

  // const handleClickCell = (e: React.ChangeEvent<HTMLDivElement>): void => {
  const handleClickCell = (e: React.MouseEvent<HTMLElement>) => {
    console.log("@@@handleClickCell: ", e);

    dispatch({
      type: "KEEP",
      postData: {
        id: e.row.id,
        title: e.row.title,
        text: e.row.text,
        comments: e.row.comments,
      },
    });
    // console.log(store.getState());
    router.push(Routes.F_POST_DETAIL);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={posts}
          columns={columns}
          // pageSize={2}
          // autoPageSize
          // rowsPerPageOptions={[20]}
          // checkboxSelection
          // disableSelectionOnClick
          density="compact"
          // checkboxSelection={false}
          // editMode={"row"}
          autoHeight
          components={{
            Toolbar: GridToolbar,
          }}
          // onRowClick={handleClickCell}
          onCellClick={(e) => handleClickCell(e)}
          // onCellClick={(e: MuiEvent<React.MouseEvent>) => handleClickCell(e)}
        />
      </ThemeProvider>
    </Box>
  );
};

export default DataGridTable;
