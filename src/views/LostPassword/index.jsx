import React from "react";
import { Form } from "../../components";
import { Container } from "../elements";
import lostPassForm from "./lostPassForm";

const LostPassword = ({ match }) => {
  return (
    <Container title="Lost Password" match={match}>
      <div className="brspacer">
        <Form forms={[lostPassForm]} onSubmit={data => console.log(data)} />
      </div>
    </Container>
  );
};

export default LostPassword;
