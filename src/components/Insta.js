import React, { Component } from 'react';

// require('jquery');
// require('slick-carousel');

import Slider from 'react-slick'

const Instafeed = require("instafeed.js");

class Insta extends Component {

  // componentDidMount() {
  //   const feed = new Instafeed({
  //       accessToken: 'IGQVJYc0ZApVmN1YUdOU1RBOWpXRzEycFpha1NxMVZAJSHYyaVR3azFaZA0lLTkp1Ry05V01adEZALTGFIVV8tN1hGMmlUYXVsR3hWdWZAfenRWajlBRkJtUFQweWlNVUhKVkRDamtOcDB4cl9RRmJleG13ZAwZDZD',
  //   });
  //
  //   feed.run();
  //
  //   // $('.variable-width')
  //   // console.log(document.querySelector('.variable-width'));
  //   // document.querySelector('.variable-width').slick({
  //   //   dots: true,
  //   //   infinite: true,
  //   //   speed: 300,
  //   //   slidesToShow: 1,
  //   //   centerMode: true,
  //   //   variableWidth: true
  //   // });
  // }

  render() {

    return(
      <div className="instafeed-wrapper">
        <p className="instafeed-title">Keep up with <a href="https://www.instagram.com/taxusstreetcoffee/">@taxusstreetcoffee</a> on Instagram</p>
        <div className="instafeed variable-width" id="instafeed"></div>
        <div className="instafeed-fade"></div>
      </div>
    );
  }
};

export default Insta;

// <div className="instafeed variable-width" id="instafeed"></div>
