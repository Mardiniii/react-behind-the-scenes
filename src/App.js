import React, { useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App Running!"); // It runs everytime the component is re-evaluated

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => {
      return !prevShowParagraph;
    });
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
