import React, { Component } from 'react';

const debounce = require('debounce');

import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

import Nav from './Nav';
import Intro from './Intro';
import ColdBrewsSection from './ColdBrewsSection';
import CoffeeShop from './CoffeeShop';
import RoastsSection from './RoastsSection';
import ShopSection from './ShopSection';
import Insta from './Insta';
import Contact from './Contact';
import Footer from './Footer';
import PopUp from './PopUp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roasts: data.roasts,
      blends: data.blends,
      shopItems: data.shop,
      currentRoast: null,
      popUp: props.popUp
    }

  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  updateUrl = (url) => {
    if(!url && url !== '') return;
    const { match, location, history } = this.props;
    history.push(url)
  }

  componentDidMount = () => {
    let paths = window.location.pathname.split('/');
    let url = window.location.pathname.split('/')[1];

    if(url === 'roasts' && paths[2]) {
      this.setState(() => ({
        currentRoast: paths[2]
      }));
    }

    if(url.length < 1) return;
    this.setState(() => ({
      url
    }))
    const elem = document.getElementById(url);
    if(elem) { window.scrollTo(0, elem.offsetTop); }
  }

  // exitPopUp = () => {
  //   this.setState(() => ({
  //     popUp: false
  //   }))
  // }

  render() {
    return (
      <div className="container"
        onWheel={
          debounce(
          () => {
            if(!document.querySelector('.lock')) {
              let sections = document.getElementsByClassName('page-section');
              for(let i = 0; i < sections.length; i++) {
                let pos = sections[i].getBoundingClientRect();
                if(pos.top + (pos.height * .75) > 0) {
                  let clear = document.querySelectorAll('.nav__list__item');
                  for(let j = 0; j < clear.length; j++) {
                    clear[j].classList.remove('nav__list__item--active');
                  }
                  let id = sections[i].getAttribute('id');
                  this.updateUrl(id)
                  const navLink = document.getElementById(id + '-link');
                  if(navLink) { document.getElementById(id + '-link').classList.add('nav__list__item--active'); }
                  return;
                }
              }
            }
          }
        )
        }>
        <Nav updateUrl={this.updateUrl}/>
        <Intro />
        <CoffeeShop />
        <ColdBrewsSection />
        <RoastsSection roasts={this.state.roasts} blends={this.state.blends} updateUrl={this.updateUrl} currentRoast={this.state.currentRoast}/>
        <ColdBrewsSection />
        <Contact />
        <Footer />
        {this.state.popUp ? <PopUp exitPopUp={this.props.exitPopUp}/> : null}
      </div>
    )
  }
};

export default withRouter(App);

// <ShopSection shopItems={this.state.shopItems} updateUrl={this.updateUrl} />
