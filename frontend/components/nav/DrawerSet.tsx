import Routes from "../../routes/routes";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import HeaderContent from "./header/HeaderContent";

const drawerWidth = 220;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [postOpen, setPostOpen] = useState(true);
  const [userOpen, setUserOpen] = useState(true);
  const [cardOpen, setCardOpen] = useState(true);

  const handlePostClick = () => {
    setPostOpen(!postOpen);
  };
  const handleUserClick = () => {
    setUserOpen(!userOpen);
  };
  const handleCardClick = () => {
    setCardOpen(!cardOpen);
  };

  // Sidebar Contents
  let sidebarItems = [
    {
      subject: "POST",
      open: false,
      menu: [
        {
          page: "Dashboard",
          url: Routes.F_POST_DASHBOARD,
        },
        {
          page: "Create",
          url: Routes.F_POST_CREATE,
        },
        {
          page: "List",
          url: Routes.F_POST_LIST,
        },
      ],
    },
    {
      subject: "USER",
      open: false,
      menu: [
        {
          page: "list",
          url: "#",
        },
        {
          page: "create",
          url: "#",
        },
      ],
    },
    {
      subject: "CARD",
      open: false,
      menu: [
        {
          page: "Home",
          url: "#",
        },
        {
          page: "List",
          url: "#",
        },
      ],
    },
  ];

  const DrawerBody = () => {
    return (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {/* TODO: Loop Object */}
          {/* ========== Post ========== */}
          <ListItem
            key={sidebarItems[0].subject}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
              onClick={() => handlePostClick()}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={sidebarItems[0].subject} />
              {postOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={postOpen} timeout="auto" unmountOnExit>
              {sidebarItems[0].menu.map((each: any) => {
                return (
                  <List
                    key={`${sidebarItems[0].subject}_${each.page}`}
                    component="div"
                    disablePadding
                  >
                    <Link href={each.url}>
                      <ListItemButton sx={{ pl: 4 }} component="a">
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={each.page} />
                      </ListItemButton>
                    </Link>
                  </List>
                );
              })}
            </Collapse>
          </ListItem>
          {/* ========== User ========== */}
          <ListItem
            key={sidebarItems[1].subject}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
              onClick={() => handleUserClick()}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={sidebarItems[1].subject} />
              {userOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={userOpen} timeout="auto" unmountOnExit>
              {sidebarItems[1].menu.map((each: any) => {
                return (
                  <List
                    key={`${sidebarItems[1].subject}_${each.page}`}
                    component="div"
                    disablePadding
                  >
                    <Link href={each.url}>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component="a"
                        href={each.url}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={each.page} />
                      </ListItemButton>
                    </Link>
                  </List>
                );
              })}
            </Collapse>
          </ListItem>
          {/* ========== Card ========== */}
          <ListItem
            key={sidebarItems[2].subject}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
              onClick={() => handleCardClick()}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={sidebarItems[2].subject} />
              {cardOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={cardOpen} timeout="auto" unmountOnExit>
              {sidebarItems[2].menu.map((each: any) => {
                return (
                  <List
                    key={`${sidebarItems[2].subject}_${each.page}`}
                    component="div"
                    disablePadding
                  >
                    <Link href={each.url}>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component="a"
                        href={each.url}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={each.page} />
                      </ListItemButton>
                    </Link>
                  </List>
                );
              })}
            </Collapse>
          </ListItem>
        </List>
      </div>
    );
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderContent />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerBody />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerBody />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          px: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {props.children}
      </Box>
    </Box>
  );
}
