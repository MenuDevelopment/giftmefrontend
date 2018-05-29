import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js'

class App extends Component {

  // Home = () => {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   )
  // }

  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home} />
          <Route path = "/other" render = {() => {return <div>sup bruh</div>}} />
        </div>
      </Router>
    );
  }
}

export default App;
