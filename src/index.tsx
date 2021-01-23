import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/global.scss";
import App from "./application/App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
