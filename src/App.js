import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animated from "./Animated";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="balloon-animation">
          <Animated
            className="cloud"
            src="/cloud.png"
            ratioX="0.36"
            ratioY="0.34"
          />
          <Animated
            className="cloud"
            src="/cloud.png"
            ratioX="0.36"
            ratioY="0.34"
          />
          <Animated
            className="cloud"
            src="/cloud.png"
            ratioX="0.16"
            ratioY="0.24"
          />
          <Animated
            className="cloud"
            src="/cloud.png"
            ratioX="0.56"
            ratioY="0.24"
          />
          <Animated
            className="cloud"
            src="/cloud.png"
            ratioX="0.26"
            ratioY="0.44"
          />
          <Animated
            className="baloon"
            src="/balloon.png"
            ratioX="0.26"
            ratioY="0.34"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
