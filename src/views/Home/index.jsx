import React, { Fragment } from "react";
import { LeftLay, RightLay } from "../../components";
import News from "./News";
import "../../styles.css";

export default function Home() {
  return (
    <Fragment>
      <div id="sitenavigation1">
        <LeftLay />
        <RightLay />
      </div>
      <div id="container1">
        <div id="content">
          <h1>Naruto Arena</h1>
          <br />
          <div id="hsitemap">
            <h2>Your #1 Naruto Online Multiplayer Game</h2>
          </div>

          <br className="clear" />

          <News />
          <div className="brspacer2">
            <div className="brspacer">
              <center>
                Naruto-Arena.net is a fansite based on the Naruto Anime and
                Manga series. The holders of the copyrighted and/or trademarked
                material appearing on this site are as follows:
                <br />
                NARUTO © 2002 MASASHI KISHIMOTO. All Rights Reserved.
                <div className="centerp" />
              </center>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
