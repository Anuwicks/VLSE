import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "../views/Home";
import Publications from "../views/Publications";
import { Route, Switch, withRouter } from "react-router-dom";
import Appbar from "../components/AppBar";
import Footer from "../components/Footer";
import React from "react";

function MainLayout(props) {
  return (
    <div>
      <CssBaseline />
      <Appbar />

      <main
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
          minHeight: "100vh",
        }}
      >
        <Switch>
          <Route exact path={`/`} render={(props) => <Home />} />
          <Route exact path={`/home`} render={(props) => <Home />} />
          <Route
            exact
            path={`/publications`}
            render={(props) => <Publications />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(MainLayout);
