import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = ({ userInfo }) => {
  return (
    <div className="brspacer">
      <h4 className="block">Account</h4>
      <div id="account">
        Welcome guest,
        <ul className="newst">
          <li>
            <NavLink to="/control-painel" activeClassName="active">
              Control Painel
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/guest" activeClassName="active">
              View profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/private-messages" activeClassName="active">
              Private messages (0 new)
            </NavLink>
          </li>
          <li>
            <NavLink to="/change-password" activeClassName="active">
              Change password
            </NavLink>
          </li>
          <li>
            <NavLink to="change-avatar" activeClassName="active">
              Change avatar
            </NavLink>
          </li>
          <li>
            <NavLink to="/clan-painel" activeClassName="active">
              Clan Painel
            </NavLink>
          </li>
          <li>
            <NavLink to="/custom-backgrounds" activeClassName="active">
              Custom Backgrounds
            </NavLink>
          </li>
          <li>
            <NavLink to="/reset-account" activeClassName="active">
              Reset account
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
