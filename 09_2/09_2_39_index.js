import React from "react";
import ReactDOM from "react-dom/client";

// init React :
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Create a function to return a portion of component:
function Greeting() {
  const user = {
    firstName: "Jessica",
    lastName: "Robles",
  };
  return (
    <div>
      <h1> {user.firstName} </h1>
      <h3> {user.lastName} </h3>
    </div>
  );
}

// render something HTML :
root.render(
  <div>
    <Greeting />
  </div>
);
