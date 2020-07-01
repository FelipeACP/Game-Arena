import React from "react";
import { Container } from "../elements";
import { Card } from "../../components";
import "semantic-ui-css/semantic.min.css";

const ClanPainel = ({ match }) => (
  <Container title="Control Painel" match={match}>
    <div style={{ marginLeft: 40 }}>
      <div className="ui grid">
        <div class="three wide column">
          <img
            src="https://web.archive.org/web/20071020084938im_/http://www.naruto-arena.com/images/avatars/uploaded/5.jpg"
            alt=""
          />
        </div>
        <div class="five wide column">
          Your Clan:
          <br />
          <h1>Clanless</h1>
          <br />
          Your Rank:
          <br />
          <h2>None</h2>
        </div>
      </div>
    </div>
    <br />
    <div className="dots" />
    <div className="brspacer" />
    <div className="ui two cards">
      <Card
        key="pm"
        link="/clan-painel/recrutiment"
        header="Clan Recrutiment"
        description="The clan recruitment section lets you create a wishlist for your clan and send invitation to prospect new members."
      />
      <Card
        key="management"
        link="/clan-painel/management"
        header="Clan Management"
        description="The clan management sections lets you mantain your members. You can create clan ranks and assign these to members."
      />
      <Card
        key="settings"
        link="/clan-painel/settings"
        header="Clan Settings"
        description="The clan settings sections lets you change the details of your clan and personalize the clan profile. Only leaders may change the clan settings."
      />
      <Card
        key="clanavatar"
        link="/clan-painel/change-avatar"
        header="Clan Avatar"
        description="The clan is a icon or logo which vizualizes the clan. It is shown in the profile of a clan. Only leaders may change the avatar."
      />
      <Card
        key="cp"
        link="/clan-painel/invitations"
        header="Clan Invitations"
        description="The clan invitations section shows all the invitation you have received from clans. By accepting an invitation, you can join a clan."
      />
      <Card
        key="register"
        link="/clan-painel/register"
        header="Clan Register"
        description="The clan register form lets you create a clan. You can only create your own clan when you are currently clanless."
      />
      <Card
        key="leave"
        link="/clan-painel/leave"
        header="Leave Clan"
        description="You can always decide to leave your clan. If you're the last clan leader in the clan, you will have to assign a new Clan leader before you can leave."
      />
      <Card
        key="disband"
        link="/clan-painel/disband"
        header="Disband Clan"
        description="If you're a clan leader, you are able to disband the clan. Note that all statistics, members and details of the clan are lost. "
      />
    </div>
  </Container>
);

export default ClanPainel;
