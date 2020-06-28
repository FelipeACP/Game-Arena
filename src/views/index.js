import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Ladder from "./Ladder";
import Mission from "./Mission";
import { Manual } from "./Manual";
import LostPassword from "./LostPassword";
import Register from "./Register";
import PrivateMessage from "./PrivateMessage";
import ChangePassword from "./ChangePassword";
import CustomBackgrounds from "./CustomBackgrounds";
import ResetAccount from "./ResetAccount";
import ControlPainel from "./ControlPainel";
import ClanPainel from "./ClanPainel";
import { Container } from "./elements";
const Test = () => <Container title="Random" />;
const NotFound = () => <Container title="Not Found" />;

const RoutesComponent = () => {
  return (
    <Switch>
      {/* Public routes */}
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
      <Route path="/clan/:id" component={Test} />

      {/* Private routes */}
      <Route exact path="/control-painel" component={ControlPainel} />
      <Route
        exact
        path="/private-messages"
        render={() => <Redirect to="/private-messages/inbox" />}
      />
      <Route exact path="/private-messages/inbox" component={PrivateMessage} />
      <Route exact path="/private-messages/outbox" component={PrivateMessage} />
      <Route exact path="/private-messages/send" component={PrivateMessage} />
      <Route exact path="/change-password" component={ChangePassword} />
      <Route exact path="/change-avatar" component={Test} />
      <Route exact path="/clan-painel" component={ClanPainel} />
      <Route exact path="/custom-backgrounds" component={CustomBackgrounds} />
      <Route exact path="/reset-account" component={ResetAccount} />
      <Route exact path="/logout" component={Test} />

      <Route component={NotFound} />
    </Switch>
  );
};

export const Routes = withRouter(RoutesComponent);
