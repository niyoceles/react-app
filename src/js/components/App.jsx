import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Login from './Login.jsx';
import CreateUser from './CreateUser.jsx';
import Users from './Users.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          {/* <ul class="nav nav-pills"> */}
          <button>
            <Link to="/adduser">Add new user</Link>
          </button>
          <button>
            <Link to="/users">Users</Link>
          </button>
          {/* </ul> */}
          <hr />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/adduser" component={CreateUser} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
