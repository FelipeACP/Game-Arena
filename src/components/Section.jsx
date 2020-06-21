import React from "react";
import { Link } from "react-router-dom";

export const Section = ({ headerImg, descrImg, descrContent, title, link }) => (
  <center>
    <div className="description">
      <div className="descrtext">
        <div className="descrheader">
          <img className="pre" alt="" src={headerImg} />
          <Link to={link}>
            <h2>{title}</h2>
          </Link>
        </div>
        <div className="descrcontent">{descrContent}</div>
        <div className="dots" />
      </div>
      <div className="descrimg">
        <img alt="" src={descrImg} />
      </div>
      <div className="infolink">
        <Link to={link}>
          <h6>Read more about {title}</h6>
        </Link>
        &nbsp;
      </div>
    </div>
  </center>
);
