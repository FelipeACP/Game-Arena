import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ title = "" }) => (
  <li>
    <div>
      <img
        className="pre"
        alt=""
        src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
      />
      &nbsp;
    </div>
    <div>
      <Link to={`/news/${title.replace(" ", "-")}`}>
        <u>{title}</u>
      </Link>
    </div>
  </li>
);

export default NewsItem;
