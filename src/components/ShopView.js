import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

export default class ShopView extends Component {
  constructor(props) {
    super(props);

    const item = data.shop.filter(function( obj ) {
      return norm(obj.title) == props.match.params.id;
    })[0];

    this.state={
      currentImage: item.images[0],
      item
    }
  }
  render() {
    document.getElementsByTagName('body')[0].classList.add('lock');
    return(
      <div className="shop-view-container">
        <div className="shop-view-wrapper">
        <Link className="back-button" to="/shop">back</Link>
          <div className="shop-item-image__wrapper">
            <div className="shop-item-image__thumbs">
              {this.state.item.images.map((image, i) => {
                return <div
                  key={image}
                  onClick={function() {
                    this.setState(() => ({
                      currentImage: image
                    }));
                  }.bind(this)}
                  className={"shop-item-image__thumb " + (this.state.currentImage == image ? 'shop-item-image__thumb--active' : ' ')}
                  ><img src={"images/" + image} /></div>
              })}
            </div>
            <img src={"images/" + this.state.currentImage}/>
          </div>
          <h1>{this.state.item.title}</h1>
        </div>
      </div>
    );
  }
};
