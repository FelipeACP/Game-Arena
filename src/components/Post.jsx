import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { TimeAbsolute } from "./TimeAbsolute";

export const Post = ({ title, dateTime, author, content }) => {
  const getPostInfo = { __html: content };
  return (
    <Fragment key={title}>
      <div key={title + "newsheader"} className="newsheader">
        <Link
          to={`/news/${title.replace(" ", "-")}`}
          className="newsh"
          key={title + "newsh"}
        >
          {title}
        </Link>
        <br key={title + "br"} />{" "}
        <font key={title + "pre"} className="info">
          <img
            key={title + "img"}
            className="pre"
            alt=""
            src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/pre.gif"
          />{" "}
          <TimeAbsolute key={title + "time"} date={dateTime} longDate /> by{" "}
          <Link to={"/profile/" + author} className="newsp" key={title + 2}>
            <b>{author}</b>
          </Link>{" "}
        </font>
      </div>
      <div key={title + "dots"} className="dots" />
      <div key={title + "news"} className="news">
        <div key={title + "content"} dangerouslySetInnerHTML={getPostInfo} />
      </div>
      <div key={title + "dots2"} className="dots" />
    </Fragment>
  );
};
