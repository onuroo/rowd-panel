import './index.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import { Provider } from 'mobx-react';
import ListWordStore from './components/ListWord/store';
const stores = { ListWordStore };

ReactDom.render((
  <Provider { ...stores }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>), document.getElementById('root'));
