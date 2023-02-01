import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.123freevectors.com/ezoimgfmt/i2.wp.com/files.123freevectors.com/wp-content/original/151839-abstract-geometric-random-irregular-lines-light-color-background-vector-graphic.jpg?w=800&q=95&ezimgfmt=rs:608x342/rscb3"
          alt="pic"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Tommy Samak</h2>
        <h4>samaktomas@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,563</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">2,463</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
