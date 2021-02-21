import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const initialValues = {
  name: "",
};

export default function CustomizedDialogs(props) {
  const classes = useStyles();

  const [authors, setAuthors] = React.useState([]);
  const handleSubmit = (values) => {
    props.setOpen(false);

    axios
      .post("/api/publications/add-author", values)

      .then(() => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  React.useEffect(() => {
    axios
      .get("/api/publications/get-authors", {
        headers: {
          "auth-token": localStorage.getItem("tkn"),
        },
      })
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={props.open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Add Author
        </DialogTitle>
        <DialogContent dividers>
          <Typography style={{ fontWeight: "bold" }}>
            Enter first and last name of author separated by a space
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
                  name='name'
                  label='Name'
                  type='name'
                  id='name'
                  helperText={
                    <ErrorMessage
                      component='div'
                      style={{ color: "#c5473f" }}
                      name='name'
                    />
                  }
                />
                <Typography align='center'>
                  {" "}
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    style={{
                      background: "#2c9155",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    Add Author
                  </Button>
                </Typography>

                <Grid
                  style={{
                    marginBottom: "2em",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Grid>
              </Form>
            )}
          </Formik>

          <Typography>Current Authors in search list:</Typography>
          {authors.map((author) => (
            <Typography style={{ color: "#037593", fontWeight: "bold" }}>
              {author}
            </Typography>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
