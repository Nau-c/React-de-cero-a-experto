import React from "react";
import ReactDOM from "react-dom/client";
import { App, HelloWorldApp } from "./HelloWorldApp";
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") ).render(
  <React.StrictMode>
    {/* {/* {/* {/* <App />
    <HelloWorldApp /> */}
    {/* <<<<<<< HEAD */}
    {/* <FirtsApp /> */ }
  {/* ======= */}
    {/* Eliminamos el titulo de FirstApp */}
<<<<<<< HEAD
    <FirstApp  subTitle = {123}/>
=======
    {/* <FirstApp title = "Espero un string" subTitle = {123}/> */}
    {/* >>>>>>> 2bc0dc4d44599596e292124730ab0b733f2419a4 */}

    <CounterApp value={20}/>
    {/* <ComponenteG/> */}
    
>>>>>>> 7170e88331c3b4d18d4a76a191947602ebbbbffe
  </React.StrictMode>
);


