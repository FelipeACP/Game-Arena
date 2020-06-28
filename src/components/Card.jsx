import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

export const Card = ({ description, header, link }) => (
  <div class="ui card">
    <div class="content">
      <div class="header">
        <Link to={link} style={{ color: "#280092" }}>
          {header}
        </Link>
      </div>
      <div class="description">{description}</div>
    </div>
  </div>
);
