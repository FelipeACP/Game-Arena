import React from "react";
import { Section } from "../../components";
import { Container } from "../elements";
import styled from "styled-components";
import asset from "../../assets";
const Mission = ({ match }) => {
  return (
    <Container title="Mission" match={match}>
      <p>
        Ninja missions are tasks that can be done to unlock more characters.
        Step-by-step guide to do a mission:
      </p>
      <Guide>
        <li>Be the required rank or higher.</li>
        <li>Have any required missions completed.</li>
        <li>Press the Start Playing button.</li>
        <li>
          Select any characters involved in any missions you wish to work on.
        </li>
        <li>Play the game normally.</li>
        <li>
          Finally understand that missions are not a seperate game but work in
          the background passively.
        </li>
      </Guide>
      <div className="brspacer">
        <Section
          link={`${match.path}/shippuden`}
          title="Shippuuden Missions"
          headerImg={asset.headerIcon}
          descrImg={asset.views.mission.images.descrImg[0]}
          descrContent="The Shippuuden Missions are the newest missions in town! With these missions you are able to unlock many new characters and upgrades to existing characters."
        />
        <Section
          link={`${match.path}/shippuden-continued`}
          title="Shippuuden Missions Continued"
          headerImg={asset.headerIcon}
          descrImg={asset.views.mission.images.descrImg[1]}
          descrContent="Continuation of the Shippuden Missions."
        />
        <Section
          link={`${match.path}/hidden-leaf-village`}
          title="Hidden Leaf Village Missions"
          headerImg={asset.headerIcon}
          descrImg={asset.views.mission.images.descrImg[2]}
          descrContent="These missions are dedicated to unlocking those who call Konoha their home, from the lowly leaf genin to the mighty Kage of legend."
        />
        <Section
          link={`${match.path}/hidden-leaf-village-s`}
          title="Hidden Leaf Village Missions S"
          headerImg={asset.headerIcon}
          descrImg={asset.views.mission.images.descrImg[3]}
          descrContent="These missions are dedicated to unlocking those who call Konoha their home, from the lowly leaf genin to the mighty Kage of legend...now in Shippuden!"
        />
      </div>
    </Container>
  );
};

const Guide = styled.ol`
  margin: 0px 0px 0px 9px;
`;

export default Mission;
