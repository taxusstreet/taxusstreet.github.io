import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import ContactView from './components/ContactView';
import RoastView from './components/RoastView';
import ShopView from './components/ShopView';
import RetailLocationsView from './components/RetailLocationsView';
import NotFound from './components/NotFound';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: data.popUp["is-active"]
    }
  }

  exitPopUp = () => {
    this.setState(() => ({
      popUp: false
    }))
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=><App exitPopUp={this.exitPopUp} popUp={this.state.popUp}/>} />
          <Route exact path="/info" render={()=><App exitPopUp={this.exitPopUp} popUp={this.state.popUp}/>} />
          <Route exact path="/coffees" render={()=><App exitPopUp={this.exitPopUp} popUp={this.state.popUp}/>} />
          <Route exact path="/shop" render={()=><App exitPopUp={this.exitPopUp} popUp={this.state.popUp}/>} />
          <Route exact path="/contact" component={ContactView}/>} />
          <Route path="/coffees/:id" component={RoastView} />
          <Route path="/shop/:id" component={ShopView} />
          <Route exact path="/retail-locations" component={RetailLocationsView} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render((<Container />), document.querySelector('#app'));
