import React, { Component, Fragment } from "react";

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      message: {
        title: "",
        body: "",
        username: ""
      }
    };
  }

  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      message: {
        ...this.state.message,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit = e => {
    e.preventDefault();
  };

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <form method="post" onSubmit={this.onSubmit}>
          <div>
            <input
              style={{ width: 350 }}
              onChange={this.handleFieldChange}
              value={this.state.message.username}
              placeholder="Username"
              name="username"
              type="text"
            />
          </div>
          <div>
            <input
              style={{ width: 350 }}
              onChange={this.handleFieldChange}
              value={this.state.message.title}
              placeholder="Subject"
              name="title"
              type="text"
            />
          </div>
          <div>
            <textarea
              style={{ width: 350 }}
              onChange={this.handleFieldChange}
              value={this.state.message.body}
              placeholder="Your message..."
              name="body"
              rows="8"
            />
          </div>

          {this.renderError()}

          <div id="pmsend">
            <button disabled={this.state.loading}>Send</button>
          </div>
        </form>
      </div>
    );
  }
}
