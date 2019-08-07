import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/index";

export class User extends Component {
  constructor() {
    super();
  }
  componentWillMount(){
    this.props.getUsers();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        <h2>Users</h2>
        {this.props.remoteUsers.map(user => {
          return (<li className="list-group-item" key={user.id}>
            {user.title}
          </li>);
        })}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    remoteUsers: state.remoteUsers
  };
}
export default connect(
  mapStateToProps,
  { getUsers }
)(User);