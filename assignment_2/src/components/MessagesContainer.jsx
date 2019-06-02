import React from "react";
import Message from "./Message.jsx";
import { connect } from "react-redux";

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const messages = this.props.messages;

    return (
      <div>
        {messages.map((item, i) => (
          <Message key={i} message={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(mapStateToProps)(MessagesContainer);
