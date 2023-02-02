import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Top news", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: UK updates", "Top news - 886")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
    </div>
  );
}
