import React, { Fragment } from "react";

const ClanInfo = ({ body }) => (
  <Fragment>
    <table width="80%" style={{ float: "left" }}>
      <tbody>
        <tr>
          <td class="title" colspan="2">
            <img
              class="pre"
              src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/pres/pre3.gif"
              alt=""
            />{" "}
            Clan information
          </td>
        </tr>
        <tr class="color2">
          <td width="30%">
            <u>Clan Name:</u>
          </td>
          <td width="70%">
            <a href="https://disney.com">
              <h6>Disney</h6>
            </a>
          </td>
        </tr>
        <tr class="color1">
          <td>Clan Abbreviation:</td>
          <td>DC</td>
        </tr>
        <tr class="color2">
          <td>Rank in clan:</td>
          <td>Joke</td>
        </tr>
        <tr class="color1">
          <td>Joined on:</td>
          <td>September 7, 2001</td>
        </tr>
        <tr>
          <td class="dots" colspan="2" />
        </tr>
      </tbody>
    </table>
    <div style={{ float: "right", marginTop: 5 }}>
      <br />
      <img src="https://i.imgur.com/xUfwVcm.jpg" alt="" />
    </div>
    <div class="brspacer clear" />
  </Fragment>
);

export default ClanInfo;
