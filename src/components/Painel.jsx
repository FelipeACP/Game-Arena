import React from "react";

export const Painel = ({ title, headerImg, children }) => (
  <table class="max">
    <tbody>
      <tr>
        <td class="title" colspan="2">
          <img alt="" class="pre" src={headerImg} />
          {title}
        </td>
      </tr>
      {children}
      <tr>
        <td class="dots" colspan="2" />
      </tr>
    </tbody>
  </table>
);
