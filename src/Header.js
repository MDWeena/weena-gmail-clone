import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import { Apps, ArrowDropDown, Notifications, Search } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://res.cloudinary.com/weena/image/upload/v1636340469/gmail_logo_2-removebg-preview_badqnj.png"
          alt="logo"
        />
      </div>
      <div className="header__middle">
          <Search />
          <input placeholder="Search mail" type="text" />
          <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
          <IconButton>
              <Apps />
          </IconButton>
          <IconButton>
              <Notifications />
          </IconButton>
          <Avatar />
      </div>
    </div>
  );
}

export default Header;
