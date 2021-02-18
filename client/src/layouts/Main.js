import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "../views/Home";
import { Route, Switch, withRouter } from "react-router-dom";
import Appbar from "../components/AppBar";

import React from "react";

function MainLayout(props) {
  return (
    <div>
      <CssBaseline />
      <Appbar />

      <main style={{ marginLeft: 30, marginRight: 30, marginTop: 20 }}>
        <Switch>
          <Route exact path={`/`} render={(props) => <Home />} />
          <Route exact path={`/home`} render={(props) => <Home />} />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(MainLayout);
