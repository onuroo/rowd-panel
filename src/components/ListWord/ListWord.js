import React, { Component } from 'react';
import './ListWord.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from '../Header/Header'
import ListRow from './view/ListRow/ListRow'
class App extends Component {
  render() {
    return (
      <div className="listWord">
        <Header />
        <div className="listContent">
          <ListRow />
          <ListRow />
          <ListRow />
          <ListRow />
        </div>
      </div>
    );
  }
}

export default App;
