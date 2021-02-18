import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
