import { useState } from "react";
import { Box, Button, Typography, Grid, Modal, Divider } from "@mui/material";
import type { inputType } from "../../pages/app/post/Create";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 3,
};

const ModalWithButton = (props: any): JSX.Element => {
  const { data, btnAction } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Close
  const handleClickClose = () => {
    setOpen(false);
  };
  // Action given as an argument
  const handleClick = () => {
    btnAction();
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Confirm
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            mb={1}
            sx={{ fontWeight: "bold" }}
          >
            Modal Title
          </Typography>
          <Divider />
          {/* TODO: Border Line should be added here!! */}
          {data.map((each: inputType) => {
            return (
              // <Grid container spacing={3} key={each.name}>
              <Grid container sx={{ mt: 2, ml: 3 }} key={each.name}>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ verticalAlign: "center" }}>
                    {each.name}:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6" sx={{ verticalAlign: "center" }}>
                    {each.value}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
          <Grid container sx={{ mt: 3 }}>
            <Grid item>
              <Button variant="outlined" onClick={handleClickClose}>
                Close
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleClick}>
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalWithButton;
