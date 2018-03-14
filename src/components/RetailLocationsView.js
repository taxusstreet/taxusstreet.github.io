import React from 'react';

import { Link } from 'react-router-dom';

const RetailLocationsView = () => {
  return(<div className="page-section" id="retail-locations-view">
            <div className="page-section__wrapper">
                <Link className="back-button" to="/">back</Link>
                <h1>Find our coffees at these locations</h1>
                {data.retailLocations.map((location, i) => {
                  return (<div key={i}>
                            <h2>{location.title}</h2>
                            <p>{location.address}</p>
                            <p>{location.city}, {location.state} {location.zip}</p>
                          </div>)
                })}
            </div>
    </div>);
};

export default RetailLocationsView;
