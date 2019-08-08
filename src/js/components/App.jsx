import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Users from './Users.jsx';

class App extends Component {
  render() {
    const ulStyle = {
      width: '350px',
      height: '50px',
    };
    const linkStyle = {
      color: 'white',
    };
    return (
      <Router>
        <div>
          <ul className="nav nav-pills">
            <button style={ulStyle} className="btn-primary">
              <Link to="/signup" style={linkStyle}>User Sign Up</Link>
            </button>
            <button style={ulStyle} className="btn-primary btn-md">
              <Link to="/" style={linkStyle}>User Sign In</Link>
            </button>
            <button style={ulStyle} className="btn-primary ">
              <Link to="/users" style={linkStyle}>Users</Link>
            </button>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
