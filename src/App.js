import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

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
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
