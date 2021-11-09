import { Button } from "@material-ui/core";
import { Add, Inbox } from "@material-ui/icons";
import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large"/>} className="sidebar__compose">
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number="54"/>
    </div>
  );
};

export default SideBar;
