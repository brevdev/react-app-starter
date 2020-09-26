import React, { useState, useEffect } from "react";
import "./App.css";
import agent from "./agent";
import BrevStacks from "./BrevStacks";
import Login from "./Login";
import AuthContextProvider, { AuthContext } from "./AuthContext";

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
    <AuthContextProvider>
      <div className="App">
        <header className="App-header">
          <BrevStacks />
          <p>{text} Brev</p>
          <Login />
        </header>
      </div>
    </AuthContextProvider>
  );
}

export default App;
