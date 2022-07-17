/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
/* CoreUI */
import "@coreui/coreui/dist/css/coreui.min.css";
import { CSidebar } from "@coreui/react";
import { CSidebarBrand } from "@coreui/react";
import { CSidebarNav } from "@coreui/react";
import { CNavTitle } from "@coreui/react";
import { CNavItem } from "@coreui/react";
import { CBadge } from "@coreui/react";
// import * as icon from "@coreui/icons";
// import { CIcon } from "@coreui/icons-react";
import { cilList, cilShieldAlt, cilSpeedometer } from "@coreui/icons";
import { CNavGroup } from "@coreui/react";
import { CSidebarToggler } from "@coreui/react";
import { CSidebarHeader } from "@coreui/react";
import { CSidebarFooter } from "@coreui/react";

interface linkSet {
  text: string;
  url: string;
}

interface menuItem {
  subject: string;
  methods: linkSet[];
}

const Sidebar = (props: Object): JSX.Element => {
  const SidebarTitle = "App Name";
  const SidebarItems: menuItem[] = [
    {
      subject: "User",
      methods: [
        {
          text: "List",
          url: "/user/list",
        },
        {
          text: "Create",
          url: "/user/create",
        },
      ],
    },
    {
      subject: "Post",
      methods: [
        {
          text: "List",
          url: "/post/list",
        },
        {
          text: "Create",
          url: "/post/create",
        },
      ],
    },
  ];

  return (
    // TODO: Icon
    <CSidebar style={{ height: "100vh" }}>
      <CSidebarBrand>Sidebar Brand</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>{SidebarTitle}</CNavTitle>
        {SidebarItems.map((item: menuItem) => {
          console.log("@item: ", item);
          return (
            <CNavGroup toggler={item.subject}>
              {item.methods.map((item: linkSet) => {
                return <CNavItem href={item.url}>{item.text}</CNavItem>;
              })}
            </CNavGroup>
          );
        })}
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
};

export default Sidebar;
