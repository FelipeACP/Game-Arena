import React from "react";
import { Container } from "./elements";
import { Form } from "../components";
import asset from "../assets";

const passForm = [
  {
    title: "Passwords",
    headerImg: asset.headerIcon,
    fields: [
      {
        name: "Old password",
        type: "password",
        required: true,
        label: "Old password",
        tip: "Fill in your (old) current password."
      },
      {
        name: "Password",
        type: "password",
        required: true,
        label: "Password",
        tip: "Fill in your desired password."
      },
      {
        name: "Confirm Password",
        type: "password",
        required: true,
        label: "Confirm Password",
        tip:
          "Please fill in your password again to make sure you didn't type any mistakes."
      }
    ]
  }
];

const ChangePassword = ({ match }) => {
  return (
    <Container title="Change Password" match={match}>
      <Form forms={passForm} onSubmit={data => console.log(data)} />
    </Container>
  );
};

export default ChangePassword;
