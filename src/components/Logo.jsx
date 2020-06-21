import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = () => (
  <div id="logo">
    <div id="mainnavigation">
      <ul>
        <NavegationButton key="startpage" link="/" text="Start Page" />
        <NavegationButton key="game" link="/game" text="Start Playing" />
        <NavegationButton
          key="game-manual"
          link="/game-manual"
          text="Game Manual"
        />
        <NavegationButton key="ladders" link="/ladders" text="Ladders" />
        <NavegationButton
          key="mission"
          link="/ninja-missions"
          text="Ninja Missions"
        />
        <NavegationButton
          key="discord"
          link="https://discordapp.com/invite/yEFaw6f"
          text="Discord"
        />
      </ul>
    </div>
  </div>
);

const NavegationButton = ({ link, source, text }) => (
  <RawButton>
    <Link to={link}>{text}</Link>
  </RawButton>
);

const RawButton = styled.li`
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  height: 25px;
  border: 1px solid #000;
  width: 190px;
  float: left;
  margin: 8px auto 0;
  padding: 4px 0 0 58px;
  color: black;
  text-shadow: 0px 0px #000;
  font-family: "Francois One";
  font-size: 18px;
  line-height: 15px;
  font-weight: 500;
  font-style: normal;
  text-transform: none;
  font-variant: small-caps;
  letter-spacing: 0;
`;
