/** @format */

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddNewNotes } from "./components/AddNewNotes";
import { MyNotes } from "./components/MyNotes";

import "./components/App.css";

const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AddNewNotes} />
          <Route path="/myNote" component={MyNotes} />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
