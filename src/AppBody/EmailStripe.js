import { Checkbox } from "@material-ui/core";
import { GradeOutlined, LabelImportantOutlined } from "@material-ui/icons";
import React from "react";
import "./emailStripe.css";

const EmailStripe = ({ id, name, title, detail }) => {
  const date = new Date();
  let time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="emailStripe">
      <div className="emailStripe__left">
        <div className="emailStripe__left--left">
          <Checkbox />
          <GradeOutlined />
          <LabelImportantOutlined />
        </div>
        {name}
      </div>
      <div className="emailStripe__right">
        {`${title} - ${detail}`}
        <div className="emailStripe__right--time">{time}</div>
      </div>
    </div>
  );
};

export default EmailStripe;
