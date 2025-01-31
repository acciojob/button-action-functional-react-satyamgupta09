import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div id="main">
      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
      <button id="click" onClick={() => setShow((prevShow) => !prevShow)}>
        Click
      </button>
    </div>
  );
}

export default App;
