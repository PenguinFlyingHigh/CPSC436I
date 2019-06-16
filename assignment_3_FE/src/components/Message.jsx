import React from 'react';
import MessageDropdown from './MessageDropdown';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
  };

  handleDeleteClick = () => {
    this.props.deleteMessage(this.props.messageObj.uuid);
  };

  render() {
    if (this.state.isSelected) {
      return (
        <div className='highlighted message-container '>
          {this.props.messageObj.message}
          <MessageDropdown messageObj={this.props.messageObj} />
          <div>
            <button onClick={this.handleClick}>Hide</button>
            <button onClick={this.handleDeleteClick}>Delete</button>
          </div>
        </div>
      );
    }
    return (
      <div className='message-container'>
        {this.props.messageObj.message}
        <div>
          <button onClick={this.handleClick}>Expand</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteMessage }
)(Message);
