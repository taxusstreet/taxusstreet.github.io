import React, { Component } from 'react';

import ColdBrewContainer from './ColdBrewContainer';
import ColdBrewView from './ColdBrewView';

export default class ColdBrewsSection extends Component {
  constructor(props) {
    super(props);


    this.state = {
      currentColdBrew: null
    }
  }
  handleColdBrew = (coldBrewToView, element) => {
    this.setState(() => ({
      currentColdBrew: coldBrewToView
    }));
  }
  clearCurrentColdBrew = () => {
    this.setState(() => ({
      currentColdBrew: null
    }));

    this.props.updateUrl('/cold-brews');

    document.getElementsByTagName('body')[0].classList.remove('lock');
  }
  componentDidUpdate = () => {
    if(this.props.currentColdBrew && !this.state.currentColdBrew) {
        this.setState(() => ({
          currentColdBrew: data.coldBrews.filter((coldBrew) => {
            if(coldBrew.title.split(" ").join("").toLowerCase() == this.props.currentColdBrew) {
              return coldBrew;
            }
          })[0]
        }));
    }
  }
  render() {
    return (
      <div className="cold-brews-section page-section" id="cold-brews">
        <div className="page-section__wrapper">
          <h1>Cold Brews</h1>
          <p className="cold-brew-message"><b>FOR HAMPTON ROADS BASED CUSTOMERS ONLY:</b> We are offering two cold brew varieties roasted and brewed fresh each week for the duration of the Covid-19 crisis so you can stay home and stay safe.</p>
            <div className="page-section__items-centered">
            {data.coldBrews.map((coldBrew, i) => {
              return (
                <ColdBrewContainer
                  key={i}
                  coldBrew={coldBrew}
                  updateUrl={this.props.updateUrl}
                  handleViewColdBrew={this.handleViewColdBrew}/>              )
            })}
            </div>
          </div>
      </div>
    );
  }
};
