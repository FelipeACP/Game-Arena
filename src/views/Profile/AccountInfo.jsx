import React from "react";
import { Segment } from "../../components";

const AccountInfo = ({ body, username }) => (
  <table className="max">
    <tbody>
      <tr>
        <td className="avatar">
          <br />
          <img
            alt=""
            class="pre"
            src="https://web.archive.org/web/20071020084938im_/http://www.naruto-arena.com/images/avatars/uploaded/5.jpg"
          />
        </td>
        <td width="100%">
          <table class="avatarmax">
            <tbody>
              <tr>
                <td class="title" colspan="2">
                  <img
                    alt=""
                    class="pre"
                    src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/pres/pre3.gif"
                  />{" "}
                  Account information
                </td>
              </tr>
              <tr class="color2">
                <td width="30%">
                  <u>Username:</u>
                </td>
                <td width="70%">
                  <h6>{username}</h6>
                </td>
              </tr>
              <tr class="color1">
                <td>Site rank:</td>
                <td>
                  <img
                    alt=""
                    src="https://web.archive.org/web/20180316184826im_/http://naruto-arena.com/images/ranks/admin.gif"
                  />{" "}
                  Admin
                </td>
              </tr>
              <tr class="color2">
                <td>Posts:</td>
                <td>0</td>
              </tr>
              <tr class="color1">
                <td>Registered on:</td>
                <td colspan="2">June 21, 1984</td>
              </tr>
              <tr>
                <td class="dots" colspan="2" />
              </tr>
            </tbody>
          </table>
        </td>
        <tr>
          <td />
          <td>
            <div className="brspacer">
              <div className="center" />
            </div>
          </td>
        </tr>
      </tr>
    </tbody>
  </table>
);

export default AccountInfo;
