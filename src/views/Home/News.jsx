import React, { Fragment, useEffect, useState } from "react";
import { Post } from "../../components";
import { getNews } from "../../service/news";
import "semantic-ui-css/semantic.min.css";

export default function News() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getNews().then(({ data }) => setPosts(data));
  }, []);
  return posts ? (
    posts.map(post => (
      <Fragment>
        <Post
          key={post.objectId}
          title={post.title}
          dateTime={post.created}
          author={post.author}
          content={post.content}
        />
        <br />
      </Fragment>
    ))
  ) : (
    <LoadingPost />
  );
}

const LoadingPost = () => (
  <div className="ui placeholder">
    <div className="header">
      <div key="1" className="line" />
      <div key="2" className="line" />
    </div>
    <div className="paragraph">
      <div key="1" className="line" />
      <div key="2" className="line" />
      <div key="3" className="line" />
      <div key="4" className="line" />
      <div key="5" className="line" />
      <div key="6" className="line" />
      <div key="7" className="line" />
      <div key="8" className="line" />
      <div key="9" className="line" />
      <div key="10" className="line" />
      <div key="11" className="line" />
      <div key="12" className="line" />
      <div key="13" className="line" />
      <div key="14" className="line" />
    </div>
  </div>
);
