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
import ContactView from './components/ContactView';
import RoastView from './components/RoastView';
import ShopView from './components/ShopView';
import RetailLocationsView from './components/RetailLocationsView';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/info" component={App} />
      <Route exact path="/contact" component={ContactView} />
      <Route exact path="/coffees" component={App} />
      <Route exact path="/shop" component={App} />
      <Route path="/coffees/:id" component={RoastView} />
      <Route path="/shop/:id" component={ShopView} />
      <Route exact path="/retail-locations" component={RetailLocationsView} />
    </Switch>
  </BrowserRouter>
), document.querySelector('#app'));
