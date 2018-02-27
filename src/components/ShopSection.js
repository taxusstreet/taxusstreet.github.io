import React, { Component } from 'react';

import ShopItem from './ShopItem';
import ShopView from './ShopView';

export default class ShopSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopItems: this.props.shopItems,
      currentShopItem: null,
      currentShopImage: null
    };
  }
  handleViewShopItem = (shopItemToView) => {
    this.setState(() => ({
      currentShopItem: shopItemToView,
      currentShopImage: shopItemToView.images[0]
    }));
  }
  clearCurrentShopItem = () => {
    this.setState(() => ({
      currentShopItem: null
    }));

    this.props.updateUrl('/shop');

    document.getElementsByTagName('body')[0].classList.remove('lock');
  }
  handleChangeShopImage = (imageToChange) => {
    this.setState(() => ({
      currentShopImage: imageToChange
    }));
  }
  render() {
    return (
      <div className="shop-section page-section" id="shop">
        <div className="page-section__wrapper">
          <h1>Shop</h1>
          <div className="page-section__items-centered">
            {this.state.shopItems.map((item, i) => {
              return <ShopItem key={i} item={item} handleViewShopItem={this.handleViewShopItem}/>
            })}
          </div>
        </div>
        {this.state.currentShopItem ?
          <ShopView
            currentShopItem={this.state.currentShopItem}
            currentShopImage={this.state.currentShopImage}
            handleChangeShopImage={this.handleChangeShopImage}
            updateUrl={this.props.updateUrl}
            clearCurrentShopItem={this.clearCurrentShopItem}/> :
          null}
      </div>
    );
  }
};
