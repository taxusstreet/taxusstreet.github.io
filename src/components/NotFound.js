import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className="roast-view-container">
      <div className="not-found">
        <h1>404 <span>:/</span></h1>
        <Link className="back-button" to="/coffees">home</Link>
      </div>
    </div>
    );
};

export default NotFound;
