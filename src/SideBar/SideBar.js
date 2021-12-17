import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Inbox,
  Label,
  LabelImportant,
  Star,
  Chat,
  Send,
  InsertDriveFile,
  ExpandMore,
  Person,
  Duo,
  Phone,
} from "@material-ui/icons";
import React from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number="54" selected={true} />
      <SidebarOption Icon={Star} title="Starred" number="54" />
      <SidebarOption Icon={AccessTime} title="Snoozed" number="54" />
      <SidebarOption Icon={LabelImportant} title="Important" number="54" />
      <SidebarOption Icon={Chat} title="Chats" number="54" />
      <SidebarOption Icon={Send} title="Sent" number="54" />
      <SidebarOption Icon={InsertDriveFile} title="Drafts" number="54" />
      <SidebarOption Icon={Label} title="Categories" number="54" />
      <SidebarOption Icon={Label} title="Personal" number="54" />
      <SidebarOption Icon={ExpandMore} title="More" />
      <div class="sidebar__footer">
        <IconButton>
          <Person />
        </IconButton>
        <IconButton>
          <Duo />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;