import React from 'react';
import { withRouter, Link } from "react-router-dom";

const debounce = require('debounce');

const Nav = (props) => {
  return(
    <div className="nav">
      <ul className="nav__list">
        <li id="info-link" className="nav__list__item nav__list__item--active">
          <a href="/#info">Info</a>
        </li>
        <li className="nav__list__item">
          <a href="/#coffees">Coffees</a>
        </li>
        <li id="shop-link" className="nav__list__item">
          <a href="/#shop">Shop</a>
        </li>
        <li id="shop-link" className="nav__list__item">
          <a href="/Contact">Contact</a>
        </li>
        <li id="shop-link" className="nav__list__item">
          <a href="/retail-locations">Locations</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
