import React from "react";

class MessageDropdown extends React.Component {
  render() {
    return <h1>Hello, {this.props.messageObj.name}. Aren't you a nosy one.</h1>;
  }
}

export default MessageDropdown;
