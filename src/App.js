import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    loggedIn: false,
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar loggedIn = {this.state.loggedIn} />
          <Route exact path = "/" component = {Home} />
          <Route path = "/other" render = {() => {return <div>sup bruh</div>}} />
        </div>
      </Router>
    );
  }
}

export default App;
