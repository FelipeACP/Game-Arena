import React from "react";

const ClanInfo = ({ body }) => (
  <table class="max">
    <tbody>
      <tr>
        <td class="title" colspan="2">
          <img
            class="pre"
            src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/pres/pre3.gif"
            alt=""
          />{" "}
          Naruto Arena Ladder
        </td>
      </tr>

      <tr class="color2">
        <td width="30%">
          <u>Level:</u>
        </td>
        <td width="70%">
          <div class="levelBackground">
            <div class="levelFill" style={{ width: 50 }} />
            <div class="levelNumber">59</div>
          </div>
        </td>
      </tr>
      <tr class="color1">
        <td width="30%">Rank:</td>
        <td width="70%">
          <img
            src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/ladderranks/rank10.png"
            class="rank"
            alt=""
          />{" "}
          <b>Kage</b>
        </td>
      </tr>
      <tr class="color2">
        <td width="30%">Experience Points:</td>
        <td width="70%">
          120000 <font class="info">xp</font>
        </td>
      </tr>
      <tr class="color1">
        <td width="30%">Ladder Rank:</td>
        <td width="70%">#3</td>
      </tr>
      <tr class="color2">
        <td>Wins:</td>
        <td>666</td>
      </tr>
      <tr class="color1">
        <td>Losses:</td>
        <td>42</td>
      </tr>
      <tr class="color2">
        <td>Win percentage:</td>
        <td>94 %</td>
      </tr>
      <tr class="color1">
        <td>Streak:</td>
        <td>+69</td>
      </tr>
      <tr class="color2">
        <td>Highest Streak:</td>
        <td>+72</td>
      </tr>
      <tr class="color1">
        <td>Highest Level:</td>
        <td>Level 64</td>
      </tr>
      <tr>
        <td class="dots" colspan="2" />
      </tr>
    </tbody>
  </table>
);

export default ClanInfo;
