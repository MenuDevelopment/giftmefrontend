import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'

class App extends Component {

  state = {
    loggedIn: false,
  }

  logOutClicked = (event) => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <Router>
        <div>
        <header>
          <NavBar
            loggedIn = {this.state.loggedIn}
            logOutClicked = {this.logOutClicked}
          />
        </header>
        <main>
          <Route exact path = "/" component = {Home} />
          <Route path = "/signup" component = {SignUpForm} />
          <Route path = "/login" render = {<div>TO BE IMPLEMENTED</div>} /> 
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
