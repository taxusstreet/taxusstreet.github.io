import React, { Component } from 'react';

// require('slick-carousel');

const Instafeed = require("instafeed.js");

class Insta extends Component {

  componentDidMount() {
    const feed = new Instafeed({
        get: 'user',
        userId: '4053916290',
        accessToken: '4053916290.92c0ad8.768ac09a33804711a7ba5f04a091577c',
        resolution: 'standard_resolution',
        template: '<div class="img_container"><a href="{{link}}"><img src="{{image}}" /></a><p>{{caption}}</p></div>'
    });

    feed.run();

    // $('.variable-width').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true
    // });
  }

  render() {
    return(
      <div className="instafeed-wrapper">
        <p className="instafeed-title">Keep up with <a href="https://www.instagram.com/taxusstreetcoffee/">@taxusstreetcoffee</a> on Instagram</p>
        <div className="arrows-wrapper">
          <div className="arrow left-arrow"></div>
          <div className="arrow right-arrow"></div>
        </div>
        <div className="instafeed" id="instafeed"></div>
        <div className="instafeed-fade"></div>
      </div>
    );
  }
};

export default Insta;
