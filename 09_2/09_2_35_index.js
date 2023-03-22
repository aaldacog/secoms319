import React from "react";
import ReactDOM from "react-dom/client";

const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);
