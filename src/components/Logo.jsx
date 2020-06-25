import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Game from "../views/Game";

export const Logo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="logo">
      <div id="mainnavigation">
        <ul className="newst">
          <NavegationButton key="startpage" link="/" text="Start Page" />
          <RawButton pointer>
            <span onClick={() => setOpen(true)}>Start Playing</span>
            {open && <Game onClose={() => setOpen(false)} />}
          </RawButton>
          <NavegationButton
            key="game-manual"
            link="/game-manual"
            text="Game Manual"
          />
          <NavegationButton key="ladders" link="/ladders" text="Ladders" />
          <NavegationButton key="missions" link="/missions" text="Missions" />
          <RawButton>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discordapp.com/invite/yEFaw6f"
            >
              Discord
            </a>
          </RawButton>
        </ul>
      </div>
    </div>
  );
};

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
  cursor: ${props => props.pointer && "pointer"};
`;
