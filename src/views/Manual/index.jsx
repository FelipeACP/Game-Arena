import React from "react";
import { Section } from "../../components";
import { Container } from "../elements";
import asset from "../../assets";
export const Manual = ({ match }) => {
  return (
    <Container title="Game Manual" match={match}>
      <span>
        For new players entering the Arena for the first time, our game manual
        provides you with all the information you need to get started right
        away. It contains info about the game itself, and everything related to
        it.
      </span>
      <Section
        link="/the-basics"
        title="The basics"
        headerImg={asset.views.gameManual.images.headerImg}
        descrImg={asset.views.gameManual.images.descrImg[0]}
        descrContent="Before you start playing it's important that you know the basics of the game. This page gives you an introduction to the gameplay.
"
      />
      <Section
        link="/characters-and-skills"
        title="Characters and Skills"
        headerImg={asset.views.gameManual.images.headerImg}
        descrImg={asset.views.gameManual.images.descrImg[1]}
        descrContent="The game focuses on characters and skills. This page gives you an overview of all characters available in the game.
      "
      />
      <Section
        link="/ladder"
        title="The ladder"
        headerImg={asset.views.gameManual.images.headerImg}
        descrImg={asset.views.gameManual.images.descrImg[2]}
        descrContent="The ladder is a solution for everyone who wants to compete with players around the world. This section contains all the information you need to know about the ninjaladder."
      />
      <Section
        link="/faq"
        title="FAQ"
        headerImg={asset.views.gameManual.images.headerImg}
        descrImg={asset.views.gameManual.images.descrImg[3]}
        descrContent="Always check this section before asking any question! This section contains the most frequently asked questions."
      />
    </Container>
  );
};
