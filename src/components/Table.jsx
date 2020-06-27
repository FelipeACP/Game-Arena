import React from "react";

export const Table = ({ columns = [], rows = [], emptyMessage }) => (
  <table class="maxnb">
    <thead>
      <tr>
        <td class="dots" colspan={columns.length} />
      </tr>
      <tr className="gray">
        {columns.map(({ name, width }) => (
          <th width={width}>{name}</th>
        ))}
      </tr>
      <tr>
        <td class="dots" colspan={columns.length} />
      </tr>
    </thead>
    <tbody>
      {rows.length > 0 ? (
        rows.map((row, i) => (
          <tr className={"color" + ((i % 2) + 1)}>
            <td>{row}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="empty-message" colspan={columns.length}>
            {" "}
            {emptyMessage}{" "}
          </td>
        </tr>
      )}
      <tr>
        <td class="dots" colspan={columns.length} />
      </tr>
    </tbody>
  </table>
);
