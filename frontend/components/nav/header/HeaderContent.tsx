import { useState } from "react";
import { Typography, Grid, Button, Menu, MenuItem } from "@mui/material";

const HeaderContent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
      <Grid item xs={3}>
        <Typography variant="h6" noWrap component="div">
          {/* TODO: Constant Value Application Name */}
          ApplicationName
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" noWrap component="div">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "white", fontWeight: "bold" }}
          >
            UserName
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderContent;
