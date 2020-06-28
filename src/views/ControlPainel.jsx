import React from "react";
import { Container } from "./elements";
import "semantic-ui-css/semantic.min.css";
import { Card } from "../components";

const ControlPainel = ({ match }) => (
  <Container title="Control Painel" match={match}>
    <p>
      {" "}
      Welcome guest, you can use your control painel to modify your preferences
      and other aspects of your account. All site-areas linked to your profile
      can be found here.{" "}
    </p>
    <br />
    <div class="ui two cards">
      <Card
        key="pm"
        link="/private-messages"
        header="Private Messages"
        description="Use the private message system to send to and receive messages from other members"
      />
      <Card
        key="vmp"
        link="/profile/guest"
        header="View My Profile"
        description="Take a look at your own profile that is unique to your account. All your stats can be found here."
      />
      <Card
        key="cmp"
        link="/change-password"
        header="Change My Password"
        description="You can use this feature to change your current password into a new password."
      />
      <Card
        key="cma"
        link="/change-avatar"
        header="Change My Avatar"
        description="Tired of your current avatar? You can change your avatar here."
      />
      <Card
        key="cp"
        link="/clan-painel"
        header="Clan Painel"
        description="The Clan Painel gives you the option to join, create or maintain a clan. It has its own control painel."
      />
      <Card
        key="cb"
        link="/custom-backgrounds"
        header="Custom Backgrounds"
        description="With this option, you can change the in-game backgrounds for the selection and battle screen."
      />
      <Card
        key="ra"
        link="/reset-account"
        header="Reset Account"
        description="If you're not happy with your account's stats, you can just reset them. This feature will reset your rank, win-lossess record and your streak."
      />
    </div>
  </Container>
);

export default ControlPainel;
