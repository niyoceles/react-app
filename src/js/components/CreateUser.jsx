// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addUser } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(addUser(user))
  };
}

class userForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const postUser = {
      id: uuidv1(),
      firstname: this.state.firstname,
      lastname:this.state.lastname,
      email: this.state.email,
      password:this.state.password 
    }
// call action
    this.props.addUser(postUser);
  }
  
  render() {
    const { firstname } = this.state;
    const { lastname } = this.state;
    const { email } = this.state;
    const { password } = this.state;

    const { item } = this.props.newUser;

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" id="firstname" value={firstname}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" id="lastname" value={lastname}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" id="email" value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Create User
        </button>
      </form>
      {item.firstname}
      </div> 
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    newUser: state.newUser
  };
}
const CreateUser = connect(mapStateToProps, mapDispatchToProps)(userForm);
export default CreateUser;