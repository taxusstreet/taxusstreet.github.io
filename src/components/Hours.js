import React from 'react';

const Hours = (props) => {
  return (
    <div className="hours">
      <h2>Hours of Operation</h2>
      <ul>
        {data.hours.map((item, i) => {
          return (<li key={i}>{item["day"]}: {item["hours"]}</li>);
        })}
      </ul>
    </div>
  );
};

export default Hours;
