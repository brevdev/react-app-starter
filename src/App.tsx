import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import agent from "./agent";
import BrevStacks from "./BrevStacks";

function App() {
  const [text, setText] = useState("Powered");

  const getVerb = async () => {
    let verb = await agent.SampleResource.get();
    console.log(verb);
    console.log(verb.verb);
    setText(verb.verb);
  };

  useEffect(() => {
    getVerb();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrevStacks />
        <p>{text} Brev</p>
      </header>
    </div>
  );
}

export default App;
