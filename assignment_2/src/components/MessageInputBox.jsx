import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";

class MessageInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message === "") {
      alert("You really gotta say something...");
      return;
    }

    alert("Submitted: " + this.state.message);
    this.props.addMessage(this.state.message);
    this.setState({
      message: ""
    });
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

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(MessageInputBox);
