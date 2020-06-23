import React from "react";
import { Section } from "../../components";
import { Container } from "../elements";
import asset from "../../assets";
const Ladder = ({ match }) => {
  return (
    <Container title="Ladder" match={match}>
      <span>
        The Naruto-Arena ladders is a way to measure the players' individual or
        a country's skill in the Naruto-Arena game. They're a rating system
        which gives you and all the other players around the oppertunity to
        compete with each other. This feature is the most important one in the
        Naruto-Arena game.
      </span>
      <div className="brspacer">
        <Section
          link={`${match.path}/ninja`}
          title="Ninja Ladder"
          headerImg={asset.headerIcon}
          descrImg={asset.views.gameManual.images.descrImg[0]}
          descrContent="The most important ladder of Naruto-Arena. It's an international ladder which everyone automatically joins when he/she starts playing a ladder game. It shows a player's individual skill."
        />
        <Section
          link={`${match.path}/clan`}
          title="Clan Ladder"
          headerImg={asset.headerIcon}
          descrImg={asset.views.ladder.images.descrImg[1]}
          descrContent="The clan ladder of the Naruto-Arena game. It's a ladder which everyone automatically joins when he/she starts playing a ladder game and is member of a clan. It shows a clan's skill."
        />
      </div>
    </Container>
  );
};

export default Ladder;
