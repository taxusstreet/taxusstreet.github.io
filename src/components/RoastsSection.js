import React, { Component } from 'react';

import RoastContainer from './RoastContainer';
import BlendContainer from './BlendContainer';
import RoastView from './RoastView';

export default class RoastsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoast: null
    }
  }
  handleViewRoast = (roastToView, element) => {
    this.setState(() => ({
      currentRoast: roastToView
    }));
  }
  clearCurrentRoast = () => {
    this.setState(() => ({
      currentRoast: null
    }));

    this.props.updateUrl('/roasts');

    document.getElementsByTagName('body')[0].classList.remove('lock');
  }
  componentDidUpdate = () => {
    if(this.props.currentRoast && !this.state.currentRoast) {
        this.setState(() => ({
          currentRoast: data.roasts.filter((roast) => {
            if(roast.title.split(" ").join("").toLowerCase() == this.props.currentRoast) {
              return roast;
            }
          })[0]
        }));
    }
  }
  render() {
    return (
      <div className="roasts-section page-section" id="coffees">
        <div className="page-section__wrapper">
          <h1>Coffees</h1>
          <h2 className="roasts-section__sub-section">Single Origins</h2>
            <div className="page-section__items-centered">
            {this.props.roasts.map((roast, i) => {
              return (
                <RoastContainer
                  key={i}
                  roast={roast}
                  updateUrl={this.props.updateUrl}
                  handleViewRoast={this.handleViewRoast}/>              )
            })}
            </div>
            <h2 className="roasts-section__sub-section">Blends</h2>
            <div className="page-section__items-centered">
            {this.props.blends.map((blend, i) => {
              return (
                <BlendContainer
                  key={i}
                  blend={blend}
                  updateUrl={this.props.updateUrl}
                  handleViewRoast={this.handleViewRoast}/>              )
            })}
            </div>
          </div>
      </div>
    );
  }
};
