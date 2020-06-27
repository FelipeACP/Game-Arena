import React, { Fragment } from "react";

export const Row = ({ field }) => (
  <Fragment>
    <tr className="color2">
      {field.tip && (
        <td class="info" colSpan="2">
          {field.tip}
        </td>
      )}
    </tr>
    <tr className="color1">
      <td width="25%">
        <label htmlFor={field.type}>{field.label}</label>
      </td>
      <td width="75%">
        {field.type === "select" ? (
          <select>
            {field.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            maxLength={field.maxlength}
          />
        )}
      </td>
    </tr>
  </Fragment>
);

export const RowValue = ({ field, i }) => (
  <Fragment>
    <tr className={"color" + ((i % 2) + 1)}>
      <td width="30%">
        <label htmlFor={field.type}>{field.label}</label>
      </td>
      <td width="70%">
        {field.img && <img alt="" src={field.img} />}
        {field.text ? field.text : null}
      </td>
    </tr>
  </Fragment>
);
