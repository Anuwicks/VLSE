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
    minWidth: 500,
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const classes = useStyles();

  const [authors, setAuthors] = React.useState([]);
  const handleSubmit = (name) => {
    let data = {};
    data["name"] = name;
    props.setOpen(false);

    axios
      .post("/api/publications/remove-author", data)

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
        style={{ minWidth: 800 }}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={props.open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Remove Author
        </DialogTitle>
        <DialogContent dividers>
          {authors.map((author) => (
            <Grid
              container
              style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
            >
              <Grid item xs={9}>
                <Typography style={{ color: "#037593", fontWeight: "bold" }}>
                  {author}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => handleSubmit(author)}
                  variant='contained'
                  color='primary'
                  style={{
                    background: "#bb3737",
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}
