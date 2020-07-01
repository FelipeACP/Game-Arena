import React from "react";

const SiteActivity = () => (
  <table class="max">
    <tbody>
      <tr>
        <td class="title" colspan="3">
          <img
            class="pre"
            alt=""
            src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/pres/pre3.gif"
          />{" "}
          Site activity
        </td>
      </tr>
      <tr class="color2">
        <td width="30%">Status:</td>
        <td width="70%" colspan="2">
          <img
            alt=""
            src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/status/online.gif"
          />{" "}
          online
        </td>
      </tr>
      <tr class="color1">
        <td>Current online activity:</td>
        <td>{new Date().toUTCString()}</td>
      </tr>
      <tr class="color2">
        <td>Current page activity:</td>
        <td colspan="2">
          <div class="nothing">n/a</div>
        </td>
      </tr>
      <tr>
        <td class="dots" colspan="3" />
      </tr>
    </tbody>
  </table>
);

export default SiteActivity;
