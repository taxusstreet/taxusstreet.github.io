import React from 'react';
import {withRouter} from "react-router-dom";

const debounce = require('debounce');

const Nav = (props) => {
  return(
    <div className="nav">
      <ul className="nav__list">
        <li id="info-link" className="nav__list__item nav__list__item--active">Info</li>
        <li id="roasts-link" className="nav__list__item">Roasts</li>
        <li id="shop-link" className="nav__list__item">Shop</li>
      </ul>
    </div>
  );
};

export default Nav;
