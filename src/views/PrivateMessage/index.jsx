import React from "react";
import { Container } from "../elements";
import { Tabs } from "./Tabs";
import { Table } from "../../components";
import Send from "./Send";

export default class PrivateMessage extends React.Component {
  state = {
    messages: []
  };
  render() {
    const { match } = this.props;
    const columns = [
      { name: "Subject", width: "40%" },
      { name: "From", width: "20%" },
      { name: "Date", width: "20%" },
      { name: "Options", width: "20%" }
    ];
    const location = match.path.split("/")[2];
    return (
      <Container title="Private Messages" match={match}>
        <span>
          Send private messages to contact one of the other Naruto Arena members
          personally. You can also use it to get in touch with any of the site's
          admin or moderator when you're experiencing problems with the game or
          site.
        </span>
        <div className="brspacer" />
        <Tabs />
        <br />
        {location !== "send" ? (
          <Table
            columns={columns}
            rows={this.state.messages}
            emptyMessage={`You have no private messages in your ${
              match.path.split("/")[2]
            }`}
          />
        ) : (
          <Send />
        )}
      </Container>
    );
  }
}
