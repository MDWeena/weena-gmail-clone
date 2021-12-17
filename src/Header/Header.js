import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  HelpOutline,
  Notifications,
  Search,
  Settings,
  Tune,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://res.cloudinary.com/weena/image/upload/v1638839063/image-removebg-preview_lemzwd.png"
          alt="logo"
        />
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <Tune className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
