import React from "react";
import { Link } from "react-router-dom";

export const LadderRank = ({ players }) => (
  <ul className="ladder">
    {players.map((player, key) => (
      <li>
        <span className="ladder1">0{key + 1}</span>
        <div className="player">
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${player.name}`}
          >
            {player.name}
          </Link>
          <div className="levelBackground">
            <div className="levelFill" style={{ width: player.levelFill }} />
            <div className="levelNumber">{player.level}</div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
