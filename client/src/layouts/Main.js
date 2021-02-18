import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "../views/Home";
import { Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
import Appbar from "../components/AppBar";

import React from "react";

function MainLayout(props) {
  const { history } = props;
  let { path, url } = useRouteMatch();

  return (
    <div>
      <CssBaseline />
      <Appbar />

      <main style={{ dispaly: "flex", justifyContent: "center" }}>
        <div>
          <Switch>
            <Route exact path={`/`} render={(props) => <Home />} />
            <Route exact path={`/home`} render={(props) => <Home />} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default withRouter(MainLayout);
