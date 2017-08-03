import React, { Component } from 'react';
import './App.css';
import AddWord from './components/AddWord/AddWord';
import ListWord from './components/ListWord/ListWord'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={AddWord}/>
        <Route path="/listWord" component={ListWord}/>
      </div>
    );
  }
}

export default App;
