import React from 'react';
import './App.css';
import MessageInputBox from './MessageInputBox';
import MessagesContainer from './MessagesContainer';
import MoreDogs from './MoreDogs';

function App() {
  return (
    <div className='App' id='container'>
      <h1> Out Loud, NOW WITH A SERVER</h1>
      <h5>
        Have something on your mind ? Tell the world. Anonymously. Now
        implemented with REACT + REDUX + EXPPRESS!
      </h5>
      <MessageInputBox />
      <MessagesContainer />
      <MoreDogs />
    </div>
  );
}

export default App;
