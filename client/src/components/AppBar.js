import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { ReactComponent as Research } from "../assets/research.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
import Home from "../views/Home";

//reference for appbar template : https://material-ui.com/components/app-bar/
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ElevateAppBar(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: "#466185", opacity: 0.97 }}>
          <Toolbar>
            <Grid container>
              <Grid
                item
                xs={5}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {" "}
                <SvgIcon
                  component={Research}
                  style={{
                    fontSize: 44,
                    color: "#233041",
                    marginLeft: 80,
                    marginRight: 30,
                  }}
                />
                <Typography style={{ fontSize: 23 }}>
                  *Academic Research Group Name*
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <ButtonGroup
                  size='large'
                  variant='text'
                  fullWidth
                  color='inherit'
                  aria-label='large outlined primary button group'
                >
                  <Button style={{ fontSize: 13 }}>Home</Button>
                  <Button style={{ fontSize: 13 }}>Projects</Button>
                  <Button style={{ fontSize: 13 }}>Publications</Button>
                  <Button style={{ fontSize: 13 }}>Team</Button>
                  <Button style={{ fontSize: 13 }}>News</Button>
                  <Button style={{ fontSize: 13 }}>Tools</Button>
                  <Button style={{ fontSize: 13 }}>Vacancies</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}

export default withRouter(ElevateAppBar);
