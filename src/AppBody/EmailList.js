import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Group,
  Inbox,
  LocalOffer,
  MoreVert,
  Refresh,
} from "@material-ui/icons";
import React from "react";
import Section from "./Section";
import "./emailList.css";
import EmailStripe from "./EmailStripe";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings__left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settings__right">
          <p>1-50 of 3,404</p>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={Group} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotion" color="green" />
      </div>
      <div className="emailList__list">
        <EmailStripe
          id="1"
          name="FirstBank"
          title="FirstBank Alert On Your account"
          detail="You have a transaction notification on your FirstBank account..."
        />
      </div>
    </div>
  );
};

export default EmailList;
