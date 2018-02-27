import React, { Component } from 'react';

import Insta from './Insta';

class Intro extends Component {
  componentDidMount() {
    const beansContainer = document.createElement('div');
    beansContainer.classList.add('bean-container');
    const selector = document.querySelector('.intro-section__text');
    if(selector) {
      selector.appendChild(beansContainer)};
  }
  render() {
    return(
      <div className="intro-section page-section" id="info">
        <div className="intro-section__text">
          <div className="intro-section__text__logo"><img src="images/logo-outlined-white.png"/></div>
          <div className="intro-section__text-wrapper">
            <h1>Taxus Street Coffee</h1>
            <p>We are a locally owned and operated coffee roastery sourcing, roasting, and brewing coffee with excellence.</p>
          </div>
        </div>
        <Insta />
      </div>
    );
  }

}

export default Intro;
