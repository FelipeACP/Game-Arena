import React from "react";
import { Painel } from "./Painel";
import { Row } from "./Row";

export const Form = ({ forms = [], onSubmit = () => {} }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(ev.target.value);
  };
  return (
    <form class="formdata" onSubmit={handleSubmit}>
      {forms.map(({ title, fields, headerImg }) => (
        <Painel title={title} headerImg={headerImg}>
          {fields.map(field => (
            <Row field={field} />
          ))}
        </Painel>
      ))}
      <div class="centerp">
        <input type="submit" class="button" name="send" value="Send" />
      </div>
    </form>
  );
};
