import React from "react";
import { createPortal } from "react-dom";

export default class Window extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement("div");
    this.externalWindow = null;
  }

  render() {
    return createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    this.externalWindow = window.open(
      "",
      "",
      "left=200,top=200,border=0,toolbar=0,scrollbars=0,statusbar=0,menubar=0,resizable=0,width=790,height=560"
    );
    if (!this.externalWindow) return;
    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.addEventListener("beforeunload", () =>
      this.props.onClose()
    );
  }

  componentWillUnmount() {
    this.externalWindow &&
      this.externalWindow.removeEventListener("beforeunload", () =>
        this.props.onClose()
      );
    this.externalWindow.close();
  }
}
