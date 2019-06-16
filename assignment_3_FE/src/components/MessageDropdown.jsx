import React from 'react';

class MessageDropdown extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.messageObj.name}. Aren't you a nosy one.</h1>
        <div>Your unique message ID is {this.props.messageObj.uuid}</div>
        <br />
        <cite>Message posted on {this.props.messageObj.timestamp}</cite>
      </div>
    );
  }
}

export default MessageDropdown;
