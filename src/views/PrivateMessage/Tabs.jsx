import React from "react";
import { NavLink } from "react-router-dom";

export const Tabs = () => (
  <center>
    <NavLink to="/private-messages/inbox" activeClassName="pmprofile">
      Inbox
    </NavLink>
    <span> - </span>
    <NavLink to="/private-messages/outbox" activeClassName="pmprofile">
      Outbox
    </NavLink>
    <span> - </span>
    <NavLink to="/private-messages/send" activeClassName="pmprofile">
      Send
    </NavLink>
  </center>
);
