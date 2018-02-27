import React from 'react';

const ShopItem = (props) => {
  return (
    <div className="shop-item" onClick={function() {
      props.handleViewShopItem(props.item)
    }}>
      <img src={"images/" + props.item.images[0]} />
      <div className="shop-item__text">
        <h3>{props.item.title}</h3>
        <p>${props.item.price}</p>
      </div>
    </div>
  );
};

export default ShopItem;
