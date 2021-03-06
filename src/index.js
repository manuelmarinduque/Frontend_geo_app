import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dash from "./Dashboard";
import Login from "./Componentes/Login";
import RegistroUsuarios from "./Componentes/registroUsuarios";
import Path from "./paths";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
