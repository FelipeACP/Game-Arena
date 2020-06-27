import React from "react";
import { Container } from "./elements";
import { Form } from "../components";
import asset from "../assets";

const resetForm = [
  {
    title: "Account Reset",
    headerImg: asset.headerIcon,
    fields: [
      {
        name: "Current Password",
        type: "password",
        required: true,
        label: "Current Password",
        tip: "Fill in your current password"
      }
    ]
  }
];

const ResetAccount = ({ match }) => {
  return (
    <Container title="Reset account" match={match}>
      <p>This page lets you reset the status of yout account.</p>
      <p>
        <b>This includes:</b>
        <ul className="arrow">
          <li>Your ladder rank</li>
          <li>Your rank</li>
          <li>Your level</li>
          <li>Your experience points</li>
          <li>Your wins</li>
          <li>Your losses</li>
          <li>Your streak</li>
        </ul>
        <b> This does NOT include</b>
        <ul className="arrow">
          <li>Your highest level</li>
          <li>Your highest streak</li>
          <li>Your missions/characters</li>
          <li>Your experience points</li>
          <li>Your private messages</li>
          <li>Your avatar</li>
        </ul>
      </p>
      <Form forms={resetForm} onSubmit={data => console.log(data)} />
    </Container>
  );
};

export default ResetAccount;
