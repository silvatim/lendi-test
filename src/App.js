import React, { Component } from 'react';
import logo from './home.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="home" />
          <h2>Lendi - React Technical Test</h2>
        </div>
        <div className="Hello-container">
          <p className="App-intro">
            Hello World
          </p>
        </div>
      </div>
    );
  }
}

export default App;
