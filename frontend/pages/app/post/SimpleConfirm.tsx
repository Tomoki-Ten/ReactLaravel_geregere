import { useRouter } from "next/router";
import { Box, Paper, Typography, Stack, Button } from "@mui/material";
import LayoutAuth from "../../../components/layout/LayoutAuth";
import AppTitle from "../../../components/AppTitle";

const SimpleConfirm = () => {
  const pageTitle = "Confirm: ";
  const router = useRouter();
  const { type } = router.query;

  const handleClickCancel = () => {
    console.log("@cancel");
  };

  const handleClickOk = () => {
    console.log("@ok");
    // axios: routeTo
  };

  const switchConfirmText = (methodType: any) => {
    console.log("@methodType: ", typeof methodType);
    switch (methodType) {
      case "delete":
        return "Are you sure to Delete the post?";
      default:
        return "Default Text";
    }
  };

  return (
    <LayoutAuth>
      <Box component="div" sx={{ pt: 5, mt: 3 }}>
        <AppTitle page_title={`${pageTitle}${!type ? "" : type}`} />
        <Paper elevation={3} sx={{ p: 1 }}>
          <Box component="div">
            <Box component="div">
              <Typography>{switchConfirmText(type)}</Typography>
            </Box>
            <Box>
              <Stack>
                <Button variant="outlined" onClick={() => handleClickCancel()}>
                  Cencel
                </Button>
                <Button variant="contained" onClick={() => handleClickOk()}>
                  OK
                </Button>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Box>
    </LayoutAuth>
  );
};

export default SimpleConfirm;
