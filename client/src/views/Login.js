import { Card, Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import admin from "../assets/management.svg";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: "#00547a",
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const [open, setOpen] = React.useState(false);

  const { history } = props;
  const classes = useStyles();
  const initialValues = {
    password: "",
  };

  const [verified, setVerified] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("/api/auth/verify", {
        headers: {
          "auth-token": sessionStorage.getItem("tkn"),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          setVerified(true);
        } else setVerified(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (values) => {
    localStorage.clear();
    axios
      .post("/api/auth/login", values)
      .then(function (response) {
        sessionStorage.setItem("tkn", response.headers["auth-token"]);

        history.push("/home");
      })
      .catch((err) => {
        setOpen(true);
      });
  };

  return (
    <div
      style={{
        alignContent: "center",
        width: "100vw",
        height: "calc(100vh)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container style={{ height: "calc(100vh)" }}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
        >
          {verified ? (
            <Card style={{}}>
              <Container style={{}}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Card
                    elevation={0}
                    style={{ width: 80, height: 80, marginBottom: 20 }}
                  >
                    {<img alt='' src={admin} />}
                  </Card>
                  <Typography component='h1' variant='h5'>
                    Click Button To Sign Out as Admin
                  </Typography>
                  <Button
                    onClick={() => {
                      sessionStorage.clear();
                      setVerified(false);
                    }}
                    variant='contained'
                    color='secondary'
                    style={{ background: "#d63e34", margin: 20 }}
                  >
                    Sign Out
                  </Button>
                </div>
              </Container>
            </Card>
          ) : (
            <Card style={{}}>
              <Container style={{}}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Card
                    elevation={0}
                    style={{ width: 80, height: 80, marginBottom: 20 }}
                  >
                    {<img alt='' src={admin} />}
                  </Card>
                  <Typography component='h1' variant='h5'>
                    Enter Admin Password
                  </Typography>
                  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                      <Form className={classes.form}>
                        <Field
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant='outlined'
                          margin='normal'
                          required
                          as={TextField}
                          fullWidth
                          name='password'
                          label='Password'
                          type='password'
                          id='password'
                          autoComplete='current-password'
                          helperText={
                            <ErrorMessage
                              component='div'
                              style={{ color: "#c5473f" }}
                              name='password'
                            />
                          }
                        />

                        <Button
                          type='submit'
                          fullWidth
                          variant='contained'
                          color='primary'
                          className={classes.submit}
                        >
                          Sign In
                        </Button>
                        <Grid
                          style={{
                            marginBottom: "3em",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        ></Grid>
                      </Form>
                    )}
                  </Formik>
                </div>
              </Container>
            </Card>
          )}
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity='error'
        >
          Invalid Password
        </Alert>
      </Snackbar>
    </div>
  );
}

export default withRouter(SignIn);
