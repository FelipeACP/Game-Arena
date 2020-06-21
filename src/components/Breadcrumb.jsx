import React from "react";
import { Link, Route } from "react-router-dom";

export const Breadcrumbs = () => (
  <div id="pagepath">
    <Link key="main" to="/">
      Naruto Arena
    </Link>
    <Route path="/:path" component={BreadcrumbsItem} />
  </div>
);

const BreadcrumbsItem = ({ match, ...rest }) => {
  const crumb = (
    match.url.charAt(1).toUpperCase() + match.url.slice(2)
  ).replace("-", " ");
  return (
    <React.Fragment>
      {match.isExact ? (
        <React.Fragment>
          &gt; <h2> {crumb} </h2>
        </React.Fragment>
      ) : (
        <Link to={match.url || ""}> &gt; {crumb} </Link>
      )}
      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </React.Fragment>
  );
};
