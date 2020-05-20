import React, { Component } from 'react';

import Hours from './Hours';


class CoffeeShop extends Component {
  componentDidMount() {
    const beansContainer = document.createElement('div');
    beansContainer.classList.add('bean-container');
    const selector = document.querySelector('.intro-section__text');
    if(selector) {
      selector.appendChild(beansContainer)};
  }
  render() {
    return(
      <div className="coffee-shop-section page-section" id="coffee-shop">
        <div className="coffee-shop-section__text">
          <div className="coffee-shop-section__image"><img src="images/coffee-shop.jpg"/></div>
          <div className="coffee-shop-section__text-wrapper">
            <h1>Our Coffee Shop</h1>
            <p>Check social media for limited coffee shop hours, and special events as we navigate phase one of reopening.</p>
              {data.shopInfo.map((item, i) => {
                return (<p key={i}>{item}</p>);
              })}
              <p className="menu"><a href="images/menu.pdf">Menu</a></p>
              <h2>845 S Battlefield Blvd, Chesapeake, VA 23322</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.137152491346!2d-76.23423108471304!3d36.69524197997041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baba89127a40d5%3A0x667afdd32ffd1cd5!2sBig%20Ugly%20Brewing!5e0!3m2!1sen!2sus!4v1585767805172!5m2!1sen!2sus" width="100%" height="200" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              <Hours />
          </div>
        </div>
      </div>
    );
  }

}

export default CoffeeShop;
