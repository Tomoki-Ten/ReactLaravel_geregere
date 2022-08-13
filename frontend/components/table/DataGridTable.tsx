// Like Libraries
import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  // GridValueGetterParams,
  GridToolbar,
  jaJP,
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Developer
import { Post } from "../../pages/app/post/Dashboard";

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

const theme = createTheme({}, jaJP);

const DataGridTable = (props: Props): JSX.Element => {
  console.log("@props");
  console.log(props);
  console.log(props.posts);
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
        />
      </ThemeProvider>
    </Box>
  );
};

export default DataGridTable;
