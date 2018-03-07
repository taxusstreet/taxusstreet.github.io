import React from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <Link to={'/shop/' + norm(props.item.title)}><img src={"images/" + props.item.images[0]} />
        <div className="shop-item__text">
          <h3>{props.item.title}</h3>
          <p>${props.item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShopItem;
