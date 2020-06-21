import React from "react";
import Login from "./Login";

export const LeftLay = () => {
  return (
    <div id="leftlay">
      <div className="nav">
        <div
          style={{ position: "absolute", width: 450, left: -10000 }}
          id="___ytsubscribe_0"
        />
        <div
          className="g-ytsubscribe"
          data-channelid="UCi34hUn4-HFj1BZdozZP2Tw"
          data-layout="default"
          data-count="default"
          data-gapiscan="true"
          data-onload="true"
          data-gapistub="true"
        />
        <h4 className="block">Naruto-Boards</h4>
        Visit the{" "}
        <a
          className="aff"
          href="https://web.archive.org/web/20191003140654/https://boards.naruto-arena.net/"
        >
          Naruto Boards
        </a>{" "}
        <i>The official Naruto Arena Forums.</i>
        <Login />
        <div className="brspacer">
          <h4 className="block">Latest news</h4>
          <ul className="newst">
            <li>
              <div>
                <img
                  className="pre"
                  alt=""
                  src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
                />
                &nbsp;
              </div>
              <div>
                <a href="https://web.archive.org/web/20191003140654/https://naruto-arena.net/news/The-Legacy-of-the-Sarutobi">
                  <u>The Legacy of the Sarutobi</u>
                </a>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="pre"
                  alt=""
                  src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
                />
                &nbsp;
              </div>
              <div>
                <a href="https://web.archive.org/web/20191003140654/https://naruto-arena.net/news/The-Fourth">
                  <u>The Fourth</u>
                </a>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="pre"
                  alt=""
                  src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
                />
                &nbsp;
              </div>
              <div>
                <a href="https://web.archive.org/web/20191003140654/https://naruto-arena.net/news/Balance-0.5-+-New-Character">
                  <u>Balance 0.5 + New Character</u>
                </a>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="pre"
                  alt=""
                  src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
                />
                &nbsp;
              </div>
              <div>
                <a href="https://web.archive.org/web/20191003140654/https://naruto-arena.net/news/A-girl-all-grown-up!">
                  <u>A girl all grown up!</u>
                </a>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="pre"
                  alt=""
                  src="https://web.archive.org/web/20191003140654im_/https://naruto-arena.net/images/pres/prenav.gif"
                />
                &nbsp;
              </div>
              <div>
                <a href="https://web.archive.org/web/20191003140654/https://naruto-arena.net/news/Balance-0.4">
                  <u>Balance 0.4</u>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
