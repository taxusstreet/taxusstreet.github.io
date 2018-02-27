import React from 'react';
import styled, { keyframes } from 'styled-components';

const RoastView = (props) => {
  document.getElementsByTagName('body')[0].classList.add('lock');
  return(
    <div className="roast-view-container">
      <div className="roast-view-wrapper">
        <p className="back-button" onClick={props.clearCurrentRoast}>back</p>
        <img />
        <h1>{props.currentRoast.title}</h1>
        <p>{props.currentRoast.origin}</p>
        <p className="desc-label">Notes:</p>
        <div className="taste-notes-container">
          {props.currentRoast.taste.map((note, i) => {
            return <span key={i} className="taste-note">{note}</span>
          })}
        </div>
        <p className="desc-label">Roast level:</p>
        <div className="roast-level">
          <div
            style={{width: props.currentRoast.level + "%"}}
            className="roast-level__bar"></div>
        </div>
      </div>
    </div>
  );
};

export default RoastView;
