import React from "react";
import { Link } from "react-router-dom";

export const ListRank = ({ players, orderBy }) => (
  <ul className="ladder">
    {players.map((player, key) => (
      <li>
        <span>{key}.</span>
        <div>
          <Link
            style={{ textDecoration: "none" }}
            to={`/profile/${player.name}`}
          >
            {player.name}
          </Link>{" "}
          <b>{player.wins}</b> {orderBy}
        </div>
      </li>
    ))}
  </ul>
);
