import React from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

const ShopItem = (props) => {
  return (
    <div className="shop-item" onClick={function() {
      props.handleViewShopItem(props.item)
    }}>
      <Link to={'/shop/' + norm(props.item.title)}><img src={"images/" + props.item.images[0]} /></Link>
      <div className="shop-item__text">
        <h3>{props.item.title}</h3>
        <p>${props.item.price}</p>
      </div>
    </div>
  );
};

export default ShopItem;
