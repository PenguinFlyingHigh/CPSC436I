import React from 'react';
import Message from './Message.jsx';
import { connect } from 'react-redux';
import { getMessages, nukeMessages } from '../actions';
import Loader from 'react-loader-spinner';

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getMessages();
  }

  handleClick = () => {
    this.props.nukeMessages();
  };

  render() {
    const { error, loading, messages } = this.props;

    if (error) {
      console.log(error);
    }

    if (loading) {
      return (
        <Loader type='ThreeDots' color='#f441c1' height='100' width='100' />
      );
    }

    return (
      <div>
        <button onClick={this.handleClick}>Don't click this</button>
        {messages.map((item, i) => (
          <Message key={item.uuid} messageObj={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
  loading: state.messages.loading,
  error: state.messages.error
});

export default connect(
  mapStateToProps,
  { getMessages, nukeMessages }
)(MessagesContainer);
