// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './components/App';
//
// ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.querySelector('#app'));
