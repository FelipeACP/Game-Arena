import React, { Fragment } from "react";
import { Logo, Header } from "./components";
import { Routes } from "./views";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <div className="background" />
      <center>
        <div id="layoutcont">
          <div id="advertisement" />
          <div id="layout" className="sitebg1">
            <Logo />
            <Header
              img={
                "https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/uploads/randomheader/header" +
                Math.ceil(Math.random() * 39 - 1) +
                ".jpg"
              }
            />
            <Routes />
          </div>
        </div>
      </center>
    </Fragment>
  );
}
