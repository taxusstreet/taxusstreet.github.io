import React from 'react';

import { Link } from 'react-router-dom';

const ContactView = () => {
  return(
    <div className="page-section" id="contact-view">
      <div className="page-section__wrapper">
        <Link className="back-button" to="/">back</Link>
        <h1>Contact Us</h1>
        <p>We'll be in touch soon.</p>
        <form action="https://formspree.io/taxusstreetcoffee@gmail.com"
        method="POST">
          <input type="text" name="name" required placeholder="Name" />
          <input type="email" name="_replyto" required placeholder="Email" />
          <textarea required name="message" placeholder="Message"></textarea>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactView;
