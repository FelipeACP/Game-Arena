import React from "react";

export const Header = ({ img }) => (
  <div id="header">
    <div id="headerimg" />
    <div
      id="randomheader"
      style={{
        backgroundImage: `url(${img})`
      }}
    />
  </div>
);
