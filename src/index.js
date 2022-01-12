import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./router/RootRouter";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/main.scss";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
