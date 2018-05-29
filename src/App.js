import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'

class App extends Component {


  logOutClicked = (event) => {
    localStorage.clear()
  }

  render() {
    return (
      <Router>
        <div>
        <header>
          <NavBar
            logOutClicked = {this.logOutClicked}
          />
        </header>
        <main>
          <Route exact path = "/" component = {Home} />
          <Route path = "/signup" component = {SignUpForm} />
          <Route path = "/login" component = {LogInForm} />
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
