import React from 'react';
import { withRouter, Link } from "react-router-dom";

const debounce = require('debounce');

const Nav = (props) => {
  return(
    <div className="nav">
      <ul className="nav__list">
        <li id="info-link" className="nav__list__item nav__list__item--active">
          <Link to="/roasts">Info</Link>
        </li>
        <li id="roasts-link" className="nav__list__item">Roasts</li>
        <li id="shop-link" className="nav__list__item">Shop</li>
      </ul>
    </div>
  );
};

export default Nav;
