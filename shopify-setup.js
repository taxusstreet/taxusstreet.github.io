
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
            id: [10621662276],
            node: document.getElementById('product-component-1519793230670'),
            moneyFormat: '${{amount}}',
            options: {"product":{"variantId":"all","width":"240px","contents":{"img":false,"imgWithCarousel":false,"title":false,"variantTitle":false,"price":false,"description":false,"buttonWithQuantity":false,"quantity":false},"styles":{"product":{"text-align":"left","@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"background-color":"#231f20",":hover":{"background-color":"#3c3536"},"border-radius":"0px",":focus":{"background-color":"#3c3536"}},"title":{"font-size":"26px"},"price":{"font-size":"18px"},"compareAt":{"font-size":"15px"}}},"cart":{"contents":{"button":true},"text":{"notice":"Shipping is added at checkout."},"styles":{"cart":{"background-color":"#231f20"},"button":{"background-color":"#231f20",":hover":{"background-color":"#3c3536"},"border-radius":"0px",":focus":{"background-color":"#3c3536"}},"title":{"color":"#ffffff"},"footer":{"background-color":"#231f20"},"header":{"color":"#ffffff"},"lineItems":{"color":"#ffffff"},"subtotalText":{"color":"#ffffff"},"subtotal":{"color":"#ffffff"},"notice":{"color":"#ffffff"},"currency":{"color":"#ffffff"},"close":{":hover":{"color":"#ffffff"},"color":"#ffffff"},"emptyCart":{"color":"#ffffff"}}},"modalProduct":{"contents":{"img":false,"imgWithCarousel":true,"variantTitle":false,"buttonWithQuantity":true,"button":false,"quantity":false},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},"button":{"background-color":"#231f20",":hover":{"background-color":"#3c3536"},"border-radius":"0px",":focus":{"background-color":"#3c3536"}}}},"toggle":{"styles":{"toggle":{"background-color":"#231f20",":hover":{"background-color":"#3c3536"},":focus":{"background-color":"#3c3536"}},"count":{"color":"#ffffff",":hover":{"color":"#ffffff"}},"iconPath":{"fill":"#ffffff"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"lineItem":{"styles":{"variantTitle":{"color":"#ffffff"},"title":{"color":"#ffffff"},"price":{"color":"#ffffff"},"quantity":{"color":"#ffffff"},"quantityIncrement":{"color":"#ffffff","border-color":"#ffffff"},"quantityDecrement":{"color":"#ffffff","border-color":"#ffffff"},"quantityInput":{"color":"#ffffff","border-color":"#ffffff"}}}},
          });
        });
      }
    })();
