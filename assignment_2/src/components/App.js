import React from "react";
import "./App.css";
import MessageInputBox from "./MessageInputBox";
import MessagesContainer from "./MessagesContainer";

function App() {
  return (
    <div className="App" id="container">
      <h1> Out Loud Reactified! </h1>{" "}
      <h5>
        Have something on your mind ? Tell the world. Anonymously. Now
        implemented with REACT + REDUX!
      </h5>{" "}
      <MessageInputBox />
      <MessagesContainer />
    </div>
  );
}

export default App;
