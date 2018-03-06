import React from 'react';

import Fb from './svg/Fb.js';
import Instagram from './svg/Instagram.js';
import Twitter from './svg/Twitter.js';

const Contact = () => {
  return(
    <div className="contact-section page-section">
      <div className="contact__button-wrapper">
        <h1>Write To Us!</h1>
        <p>Contact us about any of our products, or to inquire into wholesale options... or just to say hi!</p>
      </div>
      <div className="contact__link-wrapper">
        <a href="https://www.facebook.com/taxusstreetcoffee/"><Fb /></a>
        <a href="https://www.instagram.com/taxusstreetcoffee/"><Instagram /></a>
        <a href="https://twitter.com/taxusstreetcoffee/"><Twitter /></a>
      </div>
    </div>
  );
};

export default Contact;
