import React from "react";
import { Segment } from "../../components";
import { Container } from "../elements";
import AccountInfo from "./AccountInfo";
import LadderInfo from "./LadderInfo";
import ClanInfo from "./ClanInfo";
import SiteActivity from "./SiteActivity";

import profileLabels from "./ProfileLabels";

const Profile = ({ match }) => {
  const username = match.params.username;
  return (
    <Container title={username} match={match}>
      This page is still under development... The profile you are viewing is one
      of a registered user on Naruto-Arena. Note that this information is meant
      for on-site use only.
      <div class="brspacer" />
      <AccountInfo body={profileLabels[0]} username={username} />
      <div class="brspacer" />
      <ClanInfo />
      <LadderInfo />
      <div class="brspacer" />
      <SiteActivity />
    </Container>
  );
};

export default Profile;
