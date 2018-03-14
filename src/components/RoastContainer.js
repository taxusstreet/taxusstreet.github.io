import React from 'react';
import { Link } from 'react-router-dom';

import BeanSvg from '../svg/Bean';

import norm from '../utils/norm.js';

const RoastContainer = (props) => {
  return (
    <Link to={`coffees/${norm(props.roast.title)}`}>
      <div className={props.roast['in-stock'] ? "roast-container" : "roast-container roast-container--out-of-stock"}>
        <div className="heading-container">
          <div className="bean-container">
            <BeanSvg color={props.roast.color}/>
          </div>
          <div className="heading-container__text">
            <h2>{props.roast.title}</h2>
            <p className="origin">{props.roast.origin}</p>
          </div>
        </div>
        <p className="desc-label">Notes:</p>
        <div className="taste-notes-container">
          {props.roast.taste.map((note, i) => {
            return <span key={i} className="taste-note" style={{color: props.roast.color, outlineColor: props.roast.color}}>{note}</span>
          })}
        </div>
        <p className="desc-label">Roast level:</p>
        <div className="roast-level">
          <div
            style={{width: props.roast.level + "%"}}
            className="roast-level__bar"></div>
        </div>
        <h3 className="roast-container__price">${props.roast.price}</h3>
        <div className="roast-container__bar roast-container__top-bar" style={{backgroundColor: props.roast.color}}></div>
        <div className="roast-container__bar roast-container__bottom-bar" style={{backgroundColor: props.roast.color}}></div>
        {!props.roast['in-stock'] ? <div className="out-of-stock">OUT OF STOCK</div> : null}
      </div>
    </Link>
  );
};

export default RoastContainer;

// style={{borderTop: props.roast.color + ' 6px solid', borderBottom: props.roast.color + ' 6px solid'}}>
