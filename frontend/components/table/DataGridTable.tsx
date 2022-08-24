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
import React from "react";

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

// const handleClickCell = (e: React.MouseEvent<HTMLElement>): void => {
// const handleClickCell = (e: React.ChangeEvent<HTMLDivElement>): void => {
const handleClickCell = (e: MuiEvent<React.MouseEvent>): void => {
  console.log("@handleClickCell: ", e);
};

const DataGridTable = (props: Props): JSX.Element => {
  // console.log("@props");
  // console.log(props);
  // console.log(props.posts);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={props.posts}
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
          // onRowClick={() => console.log("@onRowClicked")}
          onCellClick={(e: MuiEvent<React.MouseEvent>) => handleClickCell(e)}
        />
      </ThemeProvider>
    </Box>
  );
};

export default DataGridTable;
