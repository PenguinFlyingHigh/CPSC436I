import React from "react";
import MessageDropdown from "./MessageDropdown";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }
  handleClick = e => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));

    e.preventDefault();
  };

  render() {
    if (this.state.isSelected) {
      return (
        <div
          className="highlighted message-container "
          onClick={this.handleClick}
        >
          {this.props.messageObj.message}
          <MessageDropdown messageObj={this.props.messageObj} />
        </div>
      );
    }
    return (
      <div className="message-container" onClick={this.handleClick}>
        {this.props.messageObj.message}
      </div>
    );
  }
}

export default Message;
