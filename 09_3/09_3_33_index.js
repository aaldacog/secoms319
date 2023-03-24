import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";

// init React :
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// render something HTML :
root.render(
      <>
        <Greeting title="Hello"/> 
        <Greeting x="World"/>
        <Greeting y={100}/>
        <Greeting z={true}/>
        <Greeting w={[1,2,3]}/>
      </>
    
);
