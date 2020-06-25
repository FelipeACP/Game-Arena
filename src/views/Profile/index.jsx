import React from "react";
import { Form } from "../../components";
import { Container } from "../elements";
import registerForm from "./registerForm";

const Register = ({ match }) => {
  return (
    <Container title="Register" match={match}>
      <div className="brspacer">
        <Form forms={registerForm} onSubmit={data => console.log(data)} />
      </div>
    </Container>
  );
};

export default Register;
