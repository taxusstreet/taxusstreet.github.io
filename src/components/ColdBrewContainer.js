import React from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

const ColdBrewContainer = (props) => {
  return (
    <Link to={`cold-brews/${norm(props.coldBrew.title)}`}>
      <div className={props.coldBrew['in-stock'] ? "cold-brew-container" : "cold-brew-container cold-brew-container--out-of-stock"}>
        <div className="heading-container">
          <div className="heading-container__text">
            <h2>{props.coldBrew.title}</h2>
          </div>
        </div>
        <p className="desc-label">Notes:</p>
        <p>{props.coldBrew.desc}</p>
        <h3 className="roast-container__price">${props.coldBrew.price}</h3>
        {!props.coldBrew['in-stock'] ? <div className="out-of-stock">OUT OF STOCK</div> : null}
        {props.coldBrew.organic ?
          <div className="organic"><img src="/images/organic.png"/></div> :
          null
        }
      </div>
    </Link>
  );
};

export default ColdBrewContainer;
