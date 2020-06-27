import React from "react";
import { Container } from "./elements";
import { Form } from "../components";
import asset from "../assets";

const backgroundForm = [
  {
    title: "Background Selection Screen",
    headerImg: asset.headerIcon,
    fields: [
      {
        name: "Background type",
        type: "select",
        options: ["Default", "Light", "Custom"],
        required: true,
        label: "Background type",
        tip: "Choose which type of background you want for the selection screen"
      },
      {
        name: "Background URL",
        type: "url",
        required: true,
        label: "Background URL",
        tip:
          "If you choose for a custom background for the selection screen, you will have to provide the url of the custom background. This must be either JPG, PNG or GIF file. Note that the best size for the image is 770x560 pixels"
      }
    ]
  },
  {
    title: "Background Battle Screen",
    headerImg: asset.headerIcon,
    fields: [
      {
        name: "Background type",
        type: "select",
        required: true,
        options: ["Default", "Light", "Custom"],
        label: "Background type",
        tip: "Choose which type of background you want for the battle screen"
      },
      {
        name: "Background URL",
        type: "url",
        required: true,
        label: "Background URL",
        tip:
          "If you choose for a custom background for the battle screen, you will have to provide the url of the custom background. This must be either JPG, PNG or GIF file. Note that the best size for the image is 770x560 pixels"
      }
    ]
  }
];

const CustomBackgrounds = ({ match }) => {
  return (
    <Container title="Custom Backgrounds" match={match}>
      <p>
        With this option, you can change your in-game background. We provide you
        with 3 options: default, light and custom.The light version is the same
        as the default except it does not have animation effects. By defining a
        custom image, you can select your own wallpaper or art.
      </p>
      <p>
        You can set a custom background for both the selection screen and battle
        screen. After changing the custom background you should close and
        re-open the in-game in roder to see the changes.
      </p>
      <Form forms={backgroundForm} onSubmit={data => console.log(data)} />
    </Container>
  );
};

export default CustomBackgrounds;
