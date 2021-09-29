/** @format */

import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import "./components/App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
