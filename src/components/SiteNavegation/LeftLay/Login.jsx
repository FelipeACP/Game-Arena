import React, { Component } from "react";
import { authenticate } from "../../../service/user";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false
  };

  handleSubmit = event => {
    const { username, password, remember } = this.state;
    event.preventDefault();
    (async () => {
      try {
        const user = await authenticate(username, password, remember);
        this.setState({ success: true });
        this.props.login(user);
      } catch (e) {
        this.setState({ success: false });
      }
    })();
  };
  handleChange = ({ target }) => this.setState({ [target.name]: target.value });
  handleToggle = () => this.setState({ remember: !this.state.remember });

  render() {
    return (
      <div className="brspacer">
        <h4 className="block">Account</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <input
            maxLength="16"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            value={this.state.password}
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="checkbox"
              name="remember"
              onChange={this.handleToggle}
            />{" "}
            Stay logged in{" "}
          </label>
          <br />
          <input
            type="submit"
            value="Login"
            className="button"
            disabled
            name="submit2"
          />
          <Link to="/register">
            <input className="button" type="button" value="Register" />
          </Link>
        </form>
        <Link to="/lost-password">
          <u>Lost your password?</u>
        </Link>
      </div>
    );
  }
}
