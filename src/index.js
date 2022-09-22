import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../src/assets/css/landingpage.css";
import "../src/assets/css/event.css";
import "../src/assets/css/createeventpage.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
