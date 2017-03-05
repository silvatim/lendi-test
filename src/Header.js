import React, {Component} from 'react';
import logo from './home.png';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="home.png" />
        <h2>Lendi - React Technical Test</h2>
      </div>
    );
  }
}

export default Header;
