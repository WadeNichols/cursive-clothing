import React, { Component } from "react";
import {withContext} from "../../AppContext.js"
//material ui components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//other imports


class Login extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      username: "",
      password: "",
      errMessage: ""
    };
  }

  handleClickLogin = () => {
    this.setState({ open: true });
  };

  handleCloseLogin = () => {
    this.setState({ open: false });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      errorMessage: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state)
      .then(() => this.clearInputs())
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    return (
      <div>
          
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Welcome to C.C.C</DialogTitle>
          <DialogContent>
            <DialogContentText>Please login or signup</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="username"
              type="username"
              value={this.state.username}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="password"
              type="password"
              value={this.state.password}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}color="primary">
              Sing-Up
            </Button>
            <Button onClick={this.handleCloseLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withContext(Login);