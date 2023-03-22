import React from "react";
import ReactDOM from "react-dom/client";

// init React :
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Create a function to return a portion of component:
function Greeting() {
  return (
    <div>
      <h1>This is a component.</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

// render something HTML :
root.render(
  <div>
    <Greeting />
  </div>
);
