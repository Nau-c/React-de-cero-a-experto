import React from "react";
import ReactDOM from "react-dom/client";
import { App, HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <HelloWorldApp />
    {/* Eliminamos el titulo de FirstApp */}
    <FirstApp  subTitle = {123}/>
  </React.StrictMode>
);


