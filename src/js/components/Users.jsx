import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions/index';

export class Users extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const card = {
      margin: '2px',
      border: '5px solid pink',
      width: '30%',
      float: 'left'
    };

    const titleHeader = {
      margin: '2px',
      textAlign: 'center'
    };
    const allUsers = this.props.remoteUsers.map(users => (
      <div key={users.id}>
        <div className="card" style={card}>
          <div className="card-body text-center mt-4">
            <h4 className="card-title">
              {' '}
              {users.firstName}
              {' '}
              {users.firstName}
            </h4>
            <p className="card-text">
Phone:
              {' '}
              {users.phone}
              {' '}
            </p>
            <p className="card-text">
Email:
              {' '}
              {users.email}
              {' '}
            </p>
            <p className="card-text">
Username:
              {' '}
              {users.userName}
              {' '}
            </p>
            <p className="card-text">
Area/ Location:
              {' '}
              {users.location}
              {' '}
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="social-icon text-xs-center" target="_blank" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon text-xs-center" target="_blank" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon text-xs-center" target="_blank" href="#">
                  <i className="fa fa-skype" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon text-xs-center" target="_blank" href="#">
                  <i className="fa fa-google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
    return (

      <div>
        <h2 style={titleHeader}> Banka Application Users</h2>
        {allUsers}
      </div>
    );
  }
}

Users.propTypes = {
  fetchUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  remoteUsers: state.remoteUsers.items
});
export default connect(mapStateToProps, { fetchUser })(Users);
