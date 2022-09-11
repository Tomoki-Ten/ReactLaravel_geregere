import { Typography } from "@mui/material";

interface Props {
  page_title: string;
}

const AppTitle = (props: Props): JSX.Element => {
  const { page_title } = props;
  return (
    <Typography
      variant="h4"
      component="div"
      gutterBottom
      mb={2}
      sx={{ fontWeight: "bold" }}
    >
      {page_title}
    </Typography>
  );
};

export default AppTitle;
