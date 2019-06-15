import React from "react";
import Message from "./Message.jsx";
import { connect } from "react-redux";
import { getMessages } from "../actions";

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getMessages();
  }

  render() {
    const { error, loading, messages } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {messages.map((item, i) => (
          <Message key={i} messageObj={item} />
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
  { getMessages }
)(MessagesContainer);
