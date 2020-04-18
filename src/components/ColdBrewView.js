import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

class ColdBrewView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coldBrew: null
    }
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    var coldBrew = data.coldBrews.filter(function( obj ) {
      return norm(obj.title) == id;
    })[0];

    if(coldBrew) {
      this.setState(() => ({
        coldBrew
      }))
    }
  }

  render() {
    if(!this.state.coldBrew) {
      return(
        <div className="cold-brew-view-container">
          <div className="not-found">
            <h1>no such cold brew <span>:/</span></h1>
            <Link className="back-button" to="/cold-brews">home</Link>
          </div>
        </div>
      )
    }

    let button = undefined;

    if(this.state.coldBrew) {
      button = this.state.coldBrew.button;
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
      return(
        <div className="cold-brew-view-container">
          <div className="cold-brew-view-wrapper">
            <Link className="back-button" to="/cold-brews">back</Link>
            <img className="cold-brew-image" src={`images/${this.state.coldBrew.image}`}/>
            <div className="cold-brew-text-wrapper">
              <h1
                className="roast__title"
                style={{textShadow: '1px 1px ' + this.state.coldBrew.color + ', 2px 2px ' + this.state.coldBrew.color + ', 3px 3px ' + this.state.coldBrew.color + ', 4px 4px ' + this.state.coldBrew.color}}
              >{this.state.coldBrew.title}</h1>
              <p className="desc-label">Notes:</p>
              <p>{this.state.coldBrew.desc}</p>

              <div className="buy-button">
                <div id="location-warning">
                  <p>***please read before ordering***</p>
                  <h1>***SOUTH HAMPTON ROADS ONLY***</h1>
                  <p>Cold Brews are only available in the area of South Hampton Roads, Virginia. We are offering same day delivery on orders received before 12:00pm local time. </p>
                  <p>We will deliver between 1pm-5pm. Please allow for one of the following options:</p>
                  <ul>
                    <li>Plan to be at home during the delivery window timeframe to refrigerate the jar inside upon delivery </li>
                    <li>If you won’t be at home, put a cooler on your porch and the cold brew will be left in the cooler.</li>
                  </ul>

                  <p>We cannot guarantee the quality of the cold brew left at room temperature for an extended period of time. Please assure you make one of the above options available. If neither are available we will leave the cold brew at your door with a text notification of its arrival.</p>
                </div>
                <p>You may also choose to get cold brew delivered weekly for 4 or 8 weeks for a discounted price. 4 weeks is $48. 8 weeks is $96. Please note what day you would like us to deliver on.</p>
                <h1>${this.state.coldBrew.price} - {this.state.coldBrew.size}oz.</h1>
                {this.state.coldBrew["in-stock"] ?
                  <div id={"product-component-" + this.state.coldBrew.button.container}></div> :
                  <div className="out-of-stock">
                    <h2>Out of stock!</h2>
                    <p>Check back soon...</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default ColdBrewView;
