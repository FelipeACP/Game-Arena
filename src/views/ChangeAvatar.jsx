import React, { Component } from "react";
import { Container } from "./elements";

const AvatarDimmer = ({ isLoading }) => (
  <div className={`ui ${isLoading ? "active" : ""} dimmer`}>
    <div className="content">
      <div className="ui loader" />
    </div>
  </div>
);

const AvatarImage = ({ url, isLoading, ...attributes }) => {
  return (
    <div class="ui dimmable">
      <AvatarDimmer isLoading={isLoading} />
      <img src={url} alt="" width="75" height="75" {...attributes} />
    </div>
  );
};

export default class ChangeAvatar extends Component {
  state = {
    url:
      "https://web.archive.org/web/20071020084938im_/http://www.naruto-arena.com/images/avatars/uploaded/5.jpg",
    loading: false
  };
  componentWillUnmount() {
    this.revokeUrl();
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ loading: true });
  };
  revokeUrl = () =>
    this.state.url && window.URL.revokeObjectURL(this.state.url);
  onSelectFile = ev => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) {
      alert("Only image is allowed");
      return;
    }
    this.revokeUrl();
    const oURL = window.URL.createObjectURL(file);
    if (this.props.onSelectedFile) this.props.onSelectedFile(file);
    this.setState({ url: oURL });
  };
  render() {
    const { url, loading } = this.state;
    return (
      <Container title="Change Avatar" match={this.props.match}>
        <div className="brspacer" />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Upload your avatar</legend>
            <ul className="num">
              <li>Custom Avatar may not be over 100kb.</li>
              <li>Only jpeg, png format are allowed.</li>
            </ul>
            <table>
              <tbody>
                <tr>
                  <td className="cavatar">
                    <AvatarImage isLoading={loading} url={url} />
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Upload a custom avatar:</b>
                          </td>
                        </tr>
                        <tr>
                          <td className="cavatar">
                            <input
                              type="file"
                              name="my-avatar"
                              onChange={this.onSelectFile}
                              accept="image/gif,image/jpeg,image/png"
                              //ref={fileInput}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="submit" className="button" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </Container>
    );
  }
}
