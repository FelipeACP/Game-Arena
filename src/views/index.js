import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import { Manual } from "./Manual";
import { Container } from "./elements";
const Test = () => <Container title="Random" />;
const NotFound = () => <Container title="Not Found" />;

const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game-manual" component={Manual} />
      <Route exact path="/ladders" component={Test} />
      <Route exact path="/ninja-missions" component={Test} />
      <Route exact path="/the-basics" component={Test} />
      <Route exact path="/news" component={Test} />
      <Route path="/news/:title" component={Test} />

      <Route path="/profile/:username" component={Test} />

      <Route component={NotFound} />
    </Switch>
  );
};

export const Routes = withRouter(RoutesComponent);
