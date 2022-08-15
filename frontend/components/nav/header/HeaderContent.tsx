import { useState } from "react";
import axios from "axios";
import { Typography, Grid, Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import Routes from "../../../routes/routes";

const HeaderContent = () => {
  // Router
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("@handleLogout");
    axios
      .post(Routes.LOGOUT, {}, { withCredentials: true })
      .then((response) => {
        // Redirect
        router.push(Routes.INDEX);
      })
      .catch((response) => {
        console.log("@catch: ", response);
      });
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
            <MenuItem onClick={handleClose}>Action Log</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderContent;
