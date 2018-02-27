import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export default class ShopView extends Component {
  constructor(props) {
    super(props);

    this.state={
      currentImage: this.props.currentShopItem.images[0]
    }
  }
  render() {
    document.getElementsByTagName('body')[0].classList.add('lock');
    return(
      <div className="shop-view-container">
        <div className="shop-view-wrapper">
          <p className="back-button" onClick={this.props.clearCurrentShopItem}>back</p>
          <div className="shop-item-image__wrapper">
            <div className="shop-item-image__thumbs">
              {this.props.currentShopItem.images.map((image, i) => {
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
          <h1>{this.props.currentShopItem.title}</h1>
        </div>
      </div>
    );
  }
};
