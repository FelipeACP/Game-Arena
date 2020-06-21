import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <div id="logo">
    <div id="mainnavigation">
      <NavegationButton
        key="startpage"
        link="/"
        source="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/content/40/navigation.gif"
      />
      <NavegationButton
        key="game"
        link="/game"
        source="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/content/41/navigation.gif"
      />
      <NavegationButton
        key="game-manual"
        link="/game-manual"
        source="https://web.archive.org/web/20200411191449im_/https://naruto-arena.net/images/content/28/navigation.gif"
      />
      <NavegationButton
        key="ladders"
        link="/ladders"
        source="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/content/39/navigation.gif"
      />
      <NavegationButton
        key="mission"
        link="/ninja-missions"
        source="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/content/45/navigation.gif"
      />
      <NavegationButton
        key="discord"
        link="https://discordapp.com/invite/yEFaw6f"
        source="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/content/61/navigation.jpg"
      />
    </div>
  </div>
);

const NavegationButton = ({ link, source }) => (
  <Link to={link}>
    <img src={source} alt="" />
  </Link>
);
