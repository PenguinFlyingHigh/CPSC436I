import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";

class MessageInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", name: "" };
  }

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message === "") {
      alert("You really gotta say something...");
      return;
    }

    if (this.state.name === "") {
      alert("You forgot your name?");
      return;
    }

    alert("Did you know that this is what you wrote: " + this.state.message);

    let newMessage = {
      name: this.state.name,
      message: this.state.message
    };

    this.props.addMessage(newMessage);

    this.setState({
      message: "",
      name: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-submit-container ">
        <label className="message-form">
          Share a message:
          <input
            type="text"
            className="form-name"
            placeholder="Name?"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <textarea
            className="message-content"
            placeholder="Spill the beans..."
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
          <input type="submit" value="Post" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(MessageInputBox);
