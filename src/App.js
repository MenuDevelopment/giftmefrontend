import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path = "/" component = {Home} />
          <Route path = "/other" render = {() => {return <div>sup bruh</div>}} />
        </div>
      </Router>
    );
  }
}

export default App;
