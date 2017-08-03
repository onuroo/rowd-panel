import React, { Component } from 'react';
import './Header.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="appInfo">
        <p>Rowd</p>
        </div>
        <Link to="/">
          <div className="addWordLink">
            <p className="p">Add Word</p>
          </div>
        </Link>
        <Link to="/listWord">
          <div className="listWordLink">
            <p className="p">List Words</p>
          </div>
        </Link>
        <Link to="/statistic">
          <div className="statisticLink">
            <p className="p">Statistic</p>
          </div>
        </Link>
        <Link to="/helpUs">
          <div className="helpUsLink">
            <p className="p">Help Us</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;
