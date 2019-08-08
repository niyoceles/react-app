/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { signUp } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    signUp: user => dispatch(signUp(user)),
  };
}

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      userName: '',
      password: '',
      location: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstName, lastName, email, phone, userName, password, location,
    } = this.state;

    const signUpData = {
      id: uuidv1(),
      firstName,
      lastName,
      email,
      phone,
      userName,
      password,
      location,
    };
    // call action
    // eslint-disable-next-line react/prop-types
    this.props.signUp(signUpData);
  }

  render() {
    const {
      firstName, lastName, email, phone, userName, password, location,
    } = this.state;

    const styleSignup = {
      border: '4px solid pink',
      width: '50%',
      margin: '0 auto',
    };

    const userSignup = this.props.newUser.item;
    localStorage.setItem('token', userSignup.token);
    localStorage.setItem('userDetails', JSON.stringify(userSignup.data));
    if (userSignup.status === 201) {
      alert('Successful signup');
      window.location = './users';
    }
    console.log(userSignup);

    return (
      <div style={styleSignup}>
        <h3>Sign form</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success btn-lg">
          Signup
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newUser: state.newUser,
  };
}
const creatingUser = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default creatingUser;
