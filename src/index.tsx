import React from "react";
import ReactDOM from "react-dom";
import "./theme.css";
import App from "./App";
import ExemploUseState from "./pages/useState";
import ExemploUseEffect from "./pages/useEffect";
import ExemploUseRef from "./pages/useRef";
import ExemploUseMemouseCallBack from "./pages/useMemouseCallback";
import ExemploUseReducer from "./pages/useReducer";
import ExemploCustomHooks from "./pages/CustomHooks";

ReactDOM.render(
  <React.StrictMode>
    <ExemploUseState />
  </React.StrictMode>,
  document.getElementById("root")
);
