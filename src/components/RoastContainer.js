import React from 'react';

import BeanSvg from '../svg/Bean';

const RoastContainer = (props) => {
  return (
    <div
      className="roast-container"
      onClick={function(e){
        props.handleViewRoast(props.roast, e.target);
        props.updateUrl('roasts/' + props.roast.title.split(' ').join('').toLowerCase());
      }}
      style={{borderTop: props.roast.color + ' 6px solid', borderBottom: props.roast.color + ' 6px solid'}}>
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
          return <span key={i} className="taste-note">{note}</span>
        })}
      </div>
      <p className="desc-label">Roast level:</p>
      <div className="roast-level">
        <div
          style={{width: props.roast.level + "%"}}
          className="roast-level__bar"></div>
      </div>
    </div>
  );
};

export default RoastContainer;
