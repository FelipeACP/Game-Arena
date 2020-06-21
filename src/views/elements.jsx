import React, { Fragment } from "react";
import { LeftLay, Breadcrumbs } from "../components";

export const Container = ({ children, title }) => (
  <Fragment>
    <div id="sitenavigation2">
      <LeftLay />
    </div>
    <div id="container2">
      <div id="content">
        <div className="brspacer">
          <h1>{title}</h1>
          <br />
          <Breadcrumbs />
        </div>
        <div className="brspacer">{children}</div>
      </div>
    </div>
  </Fragment>
);
