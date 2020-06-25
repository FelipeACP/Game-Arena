import React, { useState } from "react";
import Login from "./Login";
import NewsItem from "./NewsItem";
import UserMenu from "./UserMenu";

const items = [
  { title: "The Fourth" },
  { title: "Balance + New Character" },
  { title: "A girl all grown up!" },
  { title: "Balance 0.4" }
];

export const LeftLay = ({ userInfo = {} }) => {
  return (
    <div id="leftlay">
      <div className="nav">
        <div
          style={{ position: "absolute", width: 450, left: -10000 }}
          id="___ytsubscribe_0"
        />
        <div
          className="g-ytsubscribe"
          data-channelid="UCi34hUn4-HFj1BZdozZP2Tw"
          data-layout="default"
          data-count="default"
          data-gapiscan="true"
          data-onload="true"
          data-gapistub="true"
        />
        <h4 className="block">Naruto-Boards</h4>
        Visit the{" "}
        <a className="aff" href="https://boards.naruto-arena.net/">
          Naruto Boards
        </a>{" "}
        <i>The official Naruto Arena Forums.</i>
        {userInfo ? <UserMenu /> : <Login />}
        <div className="brspacer">
          <h4 className="block">Latest news</h4>
          <ul className="newst">
            {items.map(({ title }) => (
              <NewsItem title={title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
