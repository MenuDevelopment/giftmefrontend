import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    loggedIn: false,
    showSignUp: false,
    showLogIn: false,
  }

  logOutClicked = (event) => {
    console.log(event);
    this.setState({
      loggedIn: false
    })
  }

  logInClicked = (event) => {
    console.log(event);
    this.setState({
      loggedIn: true,
      showLogIn: true
    })
  }

  signUpClicked = (event) => {
    console.log(event);
    this.setState({
      showSignUp: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar
            loggedIn = {this.state.loggedIn}
            signUpClicked = {this.signUpClicked}
            logOutClicked = {this.logOutClicked}
            logInClicked = {this.logInClicked}
          />
          <Route exact path = "/" component = {Home} />
          <Route path = "/other" render = {() => {return <div>sup bruh</div>}} />
        </div>
      </Router>
    );
  }
}

export default App;
