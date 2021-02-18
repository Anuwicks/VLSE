import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Appbar from "./layouts/Main";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Appbar} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
