import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./Login.jsx";
import CreateUser from "./CreateUser.jsx";
import Posts from "./Posts.js";
import Tasks from "./Tasks.js";


class App extends Component {
  render() {
     return (
    <Router>
      <div>
    
        {/* <ul class="nav nav-pills"> */}
          <button>
            <Link to='/adduser'>Add new user</Link>
          </button>
          <button>
            <Link to='/users'>User</Link>
          </button>
          <button>
            <Link to='/tasks'>Task</Link>
          </button>
          <button>
            <Link to='/list'>List</Link>
          </button>
        {/* </ul> */}
        <hr />
        <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/adduser' component={CreateUser} />
        <Route path='/users' component={Posts} />
        <Route path='/tasks' component={Tasks} />
        </Switch>
        
      </div>
    </Router>
  );
 }
}

export default App;
