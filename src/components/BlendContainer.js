import React from 'react';
import { Link } from 'react-router-dom';

import BeanSvg from '../svg/Bean';

import norm from '../utils/norm.js';

const BlendContainer = (props) => {
  return (
    <Link to={`coffees/${norm(props.blend.title)}`}>
      <div
        className={props.blend['in-stock'] ? "blend-container roast-container" : "blend-container roast-container roast-container--out-of-stock"}
        style={{backgroundImage: `url(images/${props.blend["background-image"]})`, backgroundSize: '100% 100%'}}>
        <div className="heading-container">
          <div className="bean-container">
            <BeanSvg color="white"/>
          </div>
          <div className="heading-container__text">
            <h2>{props.blend.title}</h2>
            <p className="origin">{props.blend.origin}</p>
          </div>
        </div>
        <p className="desc-label">Notes:</p>
        <div className="taste-notes-container">
          {props.blend.taste.map((note, i) => {
            return <span key={i} className="taste-note">{note}</span>
          })}
        </div>
        <p className="desc-label">Roast level:</p>
        <div className="roast-level">
          <div
            style={{width: props.blend.level + "%"}}
            className="roast-level__bar"></div>
        </div>
        <h3 className="roast-container__price">${props.blend.price}</h3>
        {!props.blend['in-stock'] ? <div className="out-of-stock">OUT OF STOCK</div> : null}
      </div>
    </Link>
  );
};

export default BlendContainer;

// style={{borderTop: props.roast.color + ' 6px solid', borderBottom: props.roast.color + ' 6px solid'}}>
