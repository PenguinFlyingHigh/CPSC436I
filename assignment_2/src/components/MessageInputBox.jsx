import React from "react";

class MessageInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    if (this.state.message === "") {
      alert("You really gotta say something...");
      return;
    }

    alert("Submitted: " + this.state.message);
    this.setState({
      message: ""
    });
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-submit-container ">
        <label className="message-form">
          Share a message:
          <textarea
            className="message-content"
            placeholder="Spill the beans..."
            value={this.state.message}
            onChange={this.handleChange}
          />
          <input type="submit" value="Post" />
        </label>
      </form>
    );
  }
}

export default MessageInputBox;
