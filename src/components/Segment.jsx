import React from "react";
import { Painel } from "./Painel";
import { RowValue } from "./Row";
import asset from "../assets";

export const Segment = ({ body }) => {
  return (
    <Painel title={body.title} headerImg={asset.headerIcon}>
      {body.fields.map(field => (
        <RowValue field={field} />
      ))}
    </Painel>
  );
};
