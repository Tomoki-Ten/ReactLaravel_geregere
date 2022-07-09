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

const Sidebar= (): JSX.Element => {
  return (
    <CSidebar className="h-100">
      <CSidebarBrand>Sidebar Brand</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#">
          {/* <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> */}
          Nav item
        </CNavItem>
        <CNavItem href="#">
          {/* <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> */}
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">
            {/* <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown */}
            item
          </CNavItem>
          <CNavItem href="#">
            {/* <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown */}
            item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
};

export default Sidebar;
