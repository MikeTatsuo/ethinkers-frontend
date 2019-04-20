import React, { Component } from 'react';
import NavBar from './components/NavBar/Navbar';
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import Signup from "./pages/Signup";
import { loadUsers } from "./actions/Users.action";

import './App.scss';

class App extends Component {
  componentDidMount(){
    this.props.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/lista_usuarios" component={Users} />
        </Switch>
      </div>
    );
  }
}
export default connect(null, { loadUsers })(App);
