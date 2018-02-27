import React from 'react';

const BeanSvg = (props) => {
  var styles = {
    fill:'none',
    stroke: props.color,
    strokeWidth:2,
    strokeLinecap:'round',
    strokeMiterlimit:10
  }
  return (
    <svg version="1.1"
    	 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    	 x="0px" y="0px" width="49px" height="35.8px" viewBox="0 0 49 35.8" styles="enable-background:new 0 0 49 35.8;"
    	 xmlSpace="preserve">
    <ellipse style={styles} className="st1" cx="24.5" cy="17.9" rx="23.5" ry="16.9"/>
    <line style={styles} className="st1" x1="8.1" y1="17.9" x2="40.9" y2="17.9"/>
    </svg>
  )
};

export default BeanSvg;
