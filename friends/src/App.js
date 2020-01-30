import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">LogIn</Link>
          <Link to="/protected">Protected </Link>
        </nav>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
