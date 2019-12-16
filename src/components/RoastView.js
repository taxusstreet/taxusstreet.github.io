import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

class RoastView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roast: null
    }
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    var roast = data.roasts.filter(function( obj ) {
      return norm(obj.title) == id;
    })[0];

    var blend = data.blends.filter(function( obj ) {
      return norm(obj.title) == id;
    })[0];

    console.log('roast:', roast);
    console.log('blend:', blend);

    if(roast) {
      this.setState(() => ({
        roast
      }))
    } else if(blend) {
      this.setState(() => ({
        blend
      }))
    }
  }

  render() {
    if(!this.state.roast && !this.state.blend) {
      return(
        <div className="roast-view-container">
          <div className="not-found">
            <h1>no such roast <span>:/</span></h1>
            <Link className="back-button" to="/coffees">home</Link>
          </div>
        </div>
      )
    }

    let button = undefined;

    if(this.state.roast) {
      button = this.state.roast.button;
    } else if(this.state.blend) {
      button = this.state.blend.button;
    }


    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'taxus-street-coffee.myshopify.com',
          apiKey: 'd736852faa3e48333fd35155f7ed22fd',
          appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [button.id],
            node: document.getElementById(`product-component-${button.container}`),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "variantId": "all",
        "width": "240px",
        "contents": {
          "img": false,
          "imgWithCarousel": false,
          "title": false,
          "variantTitle": false,
          "price": false,
          "description": false,
          "buttonWithQuantity": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "text-align": "left",
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "background-color": "#ffd700",
            "color": "#231f20",
            "font-family": "Arial, sans-serif",
            ":hover": {
              "background-color": "#e6c200",
              "color": "#231f20"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#e6c200"
            },
            "font-weight": "normal"
          },
          "compareAt": {
            "font-size": "12px"
          }
        }
      },
      "cart": {
        "contents": {
          "button": true
        },
        "text": {
          "notice": "Shipping is added at checkout."
        },
        "styles": {
          "cart": {
            "background-color": "#231f20"
          },
          "button": {
            "background-color": "#ffd700",
            "color": "#231f20",
            "font-family": "Arial, sans-serif",
            ":hover": {
              "background-color": "#e6c200",
              "color": "#231f20"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#e6c200"
            },
            "font-weight": "normal"
          },
          "title": {
            "color": "#ffffff"
          },
          "footer": {
            "background-color": "#231f20"
          },
          "header": {
            "color": "#ffffff"
          },
          "lineItems": {
            "color": "#ffffff"
          },
          "subtotalText": {
            "color": "#ffffff"
          },
          "subtotal": {
            "color": "#ffffff"
          },
          "notice": {
            "color": "#ffffff"
          },
          "currency": {
            "color": "#ffffff"
          },
          "close": {
            ":hover": {
              "color": "#ffffff"
            },
            "color": "#ffffff"
          },
          "emptyCart": {
            "color": "#ffffff"
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "variantTitle": false,
          "buttonWithQuantity": true,
          "button": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "background-color": "#ffd700",
            "color": "#231f20",
            "font-family": "Arial, sans-serif",
            ":hover": {
              "background-color": "#e6c200",
              "color": "#231f20"
            },
            "border-radius": "0px",
            ":focus": {
              "background-color": "#e6c200"
            },
            "font-weight": "normal"
          }
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Arial, sans-serif",
            "background-color": "#ffd700",
            ":hover": {
              "background-color": "#e6c200"
            },
            ":focus": {
              "background-color": "#e6c200"
            },
            "font-weight": "normal"
          },
          "count": {
            "color": "#231f20",
            ":hover": {
              "color": "#231f20"
            }
          },
          "iconPath": {
            "fill": "#231f20"
          }
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#ffffff"
          },
          "title": {
            "color": "#ffffff"
          },
          "price": {
            "color": "#ffffff"
          },
          "quantity": {
            "color": "#ffffff"
          },
          "quantityIncrement": {
            "color": "#ffffff",
            "border-color": "#ffffff"
          },
          "quantityDecrement": {
            "color": "#ffffff",
            "border-color": "#ffffff"
          },
          "quantityInput": {
            "color": "#ffffff",
            "border-color": "#ffffff"
          }
        }
      }
    }
          });
        });
      }
    })();
    console.log('test');
    if(this.state.roast) {
      return(
        <div className="roast-view-container">
          <div className="roast-view-wrapper">
            <Link className="back-button" to="/coffees">back</Link>
            <img className="roast-image" src={`images/${this.state.roast.image}`}/>
            <div className="roast-text-wrapper">
              <div className="roast-text-wrapper__left">
              <h1
                className="roast__title"
                style={{textShadow: '1px 1px ' + this.state.roast.color + ', 2px 2px ' + this.state.roast.color + ', 3px 3px ' + this.state.roast.color + ', 4px 4px ' + this.state.roast.color}}
              >{this.state.roast.title}</h1>
              <p className="sub-head">{this.state.roast.origin}</p>
              <p className="desc-label">Notes:</p>
              <div className="taste-notes-container">
                {this.state.roast.taste.map((note, i) => {
                  return <span key={i} style={{color: this.state.roast.color, outlineColor: this.state.roast.color}} className="taste-note">{note}</span>
                })}
              </div>
              {this.state.roast.coordinates ?
                <p className="desc-label">Coordinates: <span style={{color: this.state.roast.color}}>{this.state.roast.coordinates}</span></p> :
                null
              }
              {this.state.roast.processing ?
                <p className="desc-label">Processing: <span style={{color: this.state.roast.color}}>{this.state.roast.processing}</span></p> :
                null
              }
              {this.state.roast.altitude ?
                <p className="desc-label">Growing Altitude: <span style={{color: this.state.roast.color}}>{this.state.roast.altitude}</span></p> :
                null
              }
              {this.state.roast.variety ?
                <p className="desc-label">Variety: <span style={{color: this.state.roast.color}}>{this.state.roast.variety}</span></p> :
                null
              }
              <p className="desc-label">Roast level:</p>
              <div className="roast-level">
                <div
                  style={{width: this.state.roast.level + "%"}}
                  className="roast-level__bar"></div>
              </div>
              <div className="buy-button">
                <h1>${this.state.roast.price} - {this.state.roast.size}oz.</h1>
                {this.state.roast["in-stock"] ?
                  <div id={"product-component-" + this.state.roast.button.container}></div> :
                  <div className="out-of-stock">
                    <h2>Out of stock!</h2>
                    <p>Check back soon...</p>
                  </div>
                }
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.blend) {
      return(
        <div className="roast-view-container">
          <div className="roast-view-wrapper">
            <Link className="back-button" to="/coffees">back</Link>
            <img className="roast-image" src={`images/${this.state.blend.image}`}/>
            <div className="roast-text-wrapper">
              <div className="roast-text-wrapper__left">
              <h1
                className="roast__title"
                style={{textShadow: '1px 1px ' + this.state.blend.color + ', 2px 2px ' + this.state.blend.color + ', 3px 3px ' + this.state.blend.color + ', 4px 4px ' + this.state.blend.color}}
              >{this.state.blend.title}</h1>
              <p className="sub-head">{this.state.blend.origin}</p>
              <p className="desc-label">Notes:</p>
              <div className="taste-notes-container">
                {this.state.blend.taste.map((note, i) => {
                  return <span key={i} style={{color: this.state.blend.color, outlineColor: this.state.blend.color}} className="taste-note">{note}</span>
                })}
              </div>
              <p className="desc-label">Roast level:</p>
              <div className="roast-level">
                <div
                  style={{width: this.state.blend.level + "%"}}
                  className="roast-level__bar"></div>
              </div>
              <p className="blend-description">{this.state.blend.description}</p>
              <div className="buy-button">
                <h1>${this.state.blend.price} - {this.state.blend.size}oz.</h1>
                {this.state.blend["in-stock"] ?
                  <div id={"product-component-" + this.state.blend.button.container}></div> :
                  <div className="out-of-stock">
                    <h2>Out of stock!</h2>
                    <p>Check back soon...</p>
                  </div>
                }
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default RoastView;
