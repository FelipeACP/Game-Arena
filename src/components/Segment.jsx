import React from "react";
import { Painel } from "./Painel";
import { RowValue } from "./Row";

export const Segment = ({ body }) => {
  return (
    <Painel title={body.title} headerImg={body.headerImg}>
      {body.fields.map(field => (
        <RowValue field={field} />
      ))}
    </Painel>
  );
};
