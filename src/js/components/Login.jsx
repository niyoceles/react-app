// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { loginData } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loginData: login => dispatch(loginData(login))
  };
}

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const postLoginData = {
        email: this.state.email,
        password: this.state.password
      }
    this.props.loginData(postLoginData);
  }
  
  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="text" name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="text" name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Login
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(LoginForm);
export default Form;