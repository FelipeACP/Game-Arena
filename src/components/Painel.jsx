import React from "react";

export const Painel = ({ title, headerImg, children }) => (
  <table className="max">
    <tbody>
      <tr>
        <td className="title" colSpan="2">
          <img alt="" class="pre" src={headerImg} />
          {title}
        </td>
      </tr>
      {children}
      <tr>
        <td className="dots" colSpan="2" />
      </tr>
    </tbody>
  </table>
);
