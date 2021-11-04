import React from "react";
import "../../styles/topbar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TOT Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="https://i.ibb.co/0Jvty5D/Mprofile.jpg" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
