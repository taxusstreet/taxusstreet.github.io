// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './components/App';
//
// ReactDOM.render(<App />, document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import RoastView from './components/RoastView';
import ShopView from './components/ShopView';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/info" component={App} />
      <Route exact path="/roasts" component={App} />
      <Route exact path="/shop" component={App} />
      <Route path="/roasts/:id" component={RoastView} />
      <Route path="/shop/:id" component={ShopView} />
    </Switch>
  </BrowserRouter>
), document.querySelector('#app'));
