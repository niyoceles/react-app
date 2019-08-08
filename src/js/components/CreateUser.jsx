// src/js/components/Form.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { createUser } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    createUser: user => dispatch(createUser(user)),
  };
}

export class CreateUser extends Component {
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

    const createUserData = {
      id: uuidv1(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      userName: this.state.userName,
      password: this.state.password,
      location: this.state.location,
    };
    // call action
    this.props.createUser(createUserData);
  }

  render() {
    const { firstName } = this.state;
    const { lastName } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { userName } = this.state;
    const { password } = this.state;
    const { location } = this.state;

    // const { item } = this.props.newUser;
    return (
      <div>
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
          Create User
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
<<<<<<< HEAD
const CreateUser = connect(mapStateToProps, mapDispatchToProps)(userForm);
export default CreateUser;
=======
const creatingUser = connect(mapStateToProps, mapDispatchToProps)(CreateUser);
export default creatingUser;
>>>>>>> develop
