import React from 'react';
import MessageDropdown from './MessageDropdown';
import { connect } from 'react-redux';
import { deleteMessage, editMessage } from '../actions';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isEditing: false,
      message: this.props.messageObj.message,
      name: this.props.messageObj.name
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

  handleEditClick = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message === '') {
      alert('You have to say something.');
      return;
    }

    if (this.state.name === '') {
      alert('You cannot be nobody');
      return;
    }

    let editedMessage = {
      timestamp: new Date() + '',
      name: this.state.name,
      message: this.state.message
    };

    this.props.editMessage(editedMessage, this.props.messageObj.uuid);

    this.setState({
      isEditing: false
    });
  };

  render() {
    if (this.state.isSelected) {
      return (
        <div className='highlighted message-container'>
          <h2>{this.props.messageObj.message}</h2>
          <MessageDropdown messageObj={this.props.messageObj} />
          <div>
            <button onClick={this.handleDeleteClick}>Delete</button>
            <button onClick={this.handleClick}>Close</button>
            <button onClick={this.handleEditClick}>Edit</button>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className='message-submit-container'
            hidden={!this.state.isEditing}
          >
            <label className='message-form'>
              Edit your message:
              <input
                type='text'
                className='form-name'
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <textarea
                className='message-content'
                value={this.state.message}
                onChange={this.handleMessageChange}
              />
              <input type='submit' value='COMMIT CHANGES' />
            </label>
          </form>
        </div>
      );
    }
    return (
      <div className='message-container'>
        <h2>{this.props.messageObj.message}</h2>
        <div>
          <button onClick={this.handleClick}>Expand</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteMessage, editMessage }
)(Message);
