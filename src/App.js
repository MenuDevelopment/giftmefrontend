import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'
import LogInForm from './components/LogInForm'
import { Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    count: 0
  }


  logOutClicked = (event) => {
    localStorage.clear()
    this.setState({
      count: this.state.count + 1
    })
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
          <Segment textAlign='center'>
            <Route exact path = "/" component = {Home} />
            <Route path = "/signup" component = {SignUpForm} />
            <Route path = "/login" component = {LogInForm} />
          </Segment>
        </main>
        </div>
      </Router>
    );
  }
}

export default App;
