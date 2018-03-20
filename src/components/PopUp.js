import React from 'react';

const PopUpDiscount = (props) => {
  return (
    <div className="pop-up">
      <p dangerouslySetInnerHTML={{__html: data.popUp.message}}></p>
      <div
        onClick={function(e) {
          const target = e.target.parentNode;
          target.style.opacity = 0;
          target.style.bottom = 0;
          setTimeout(function(){target.parentNode.removeChild(target);}, 1000);
          // props.exitPopUp();
        }}
        className="x">&#x2715;</div>
    </div>
  );
};

export default PopUpDiscount;
