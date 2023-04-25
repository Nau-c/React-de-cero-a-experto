import React from "react";
import ReactDOM from "react-dom/client";
import { App, HelloWorldApp } from "./HelloWorldApp";
import { FirtsApp } from "./FirtsApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <HelloWorldApp />
    <FirtsApp title="Holaaa" subTitle="test"/>
  </React.StrictMode>
);
