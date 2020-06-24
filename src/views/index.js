import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Ladder from "./Ladder";
import Mission from "./Mission";
import { Manual } from "./Manual";
import LostPassword from "./LostPassword";
import Register from "./Register";
import { Container } from "./elements";
const Test = () => <Container title="Random" />;
const NotFound = () => <Container title="Not Found" />;

const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game-manual" component={Manual} />
      <Route exact path="/ladders" component={Ladder} />
      <Route exact path="/missions" component={Mission} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/lost-password" component={LostPassword} />
      <Route exact path="/the-basics" component={Test} />
      <Route exact path="/news" component={Test} />
      <Route path="/news/:title" component={Test} />

      <Route path="/profile/:username" component={Test} />

      <Route component={NotFound} />
    </Switch>
  );
};

export const Routes = withRouter(RoutesComponent);
