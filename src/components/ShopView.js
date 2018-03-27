import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import norm from '../utils/norm.js';

export default class ShopView extends Component {
  constructor(props) {
    super(props);

    const item = data.shop.filter(function( obj ) {
      return norm(obj.title) == props.match.params.id;
    })[0];

    this.state={
      currentImage: item.images[0],
      item
    }
  }
  componentDidUpdate() {
    const container = document.querySelector(".shop-item-image__inner-wrapper");
    const newHeight = container.getElementsByTagName("img")[0].offsetHeight;

    console.log(container.getElementsByTagName("img")[0].offsetHeight);

    container.style.height = `${newHeight}px`;
  }
  componentDidMount() {
    setTimeout(() => {
      const container = document.querySelector(".shop-item-image__inner-wrapper");
      container.style.height = container.getElementsByTagName("img")[0].offsetHeight + 'px';
    }, 1000);
  }
  render() {
    const button = this.state.item.button;
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
          let container = null
          if(document.getElementById(`product-component-${button.container}`).innerHTML == '') {
            container = document.getElementById(`product-component-${button.container}`);
          } else {
            return
          }
          ui.createComponent('product', {
            id: [button.id],
            node: container,
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
      <div className="shop-view-container">
        <div className="shop-view-wrapper">
        <Link className="back-button" to="/shop">back</Link>
          <div className="shop-item-image__wrapper">
            <div className="shop-item-image__inner-wrapper">
              <img src={"images/" + this.state.currentImage}/>
            </div>
            {this.state.item.images.length > 1 ? (
              <div className="shop-item-image__thumbs">
                {this.state.item.images.map((image, i) => {
                  return <div
                    key={image}
                    onClick={function() {
                      this.setState(() => ({
                        currentImage: image
                      }));

                    }.bind(this)}
                    className={"shop-item-image__thumb " + (this.state.currentImage == image ? "shop-item-image__thumb--active" : " ")}
                    ><img src={"images/" + image} /></div>
                })}
              </div>
            ) : (null)}
          </div>
          <div className="shop-text-wrapper">
            <div className="shop-text-wrapper__left">
            <h1 className="shop__title">{this.state.item.title}</h1>
            <p className="shop__desc">{this.state.item.desc}</p>
            <h2 className="shop__price">${this.state.item.price}</h2>
            <div className="buy-button">
              <div id={"product-component-" + this.state.item.button.container}></div>
            </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
};
