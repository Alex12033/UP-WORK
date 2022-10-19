function payPalBtns() {
  function initPayPalButton() {
    paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "white",
          layout: "vertical",
          label: "paypal",
        },

        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                description: "כרטיס לסדנת מבוא לקריפטו",
                amount: { currency_code: "ILS", value: 50 },
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Full available details
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );

            // Show a success message within this page, e.g.
            const element = document.getElementById("paypal-button-container");
            element.innerHTML = "";
            element.innerHTML = "<h3>Thank you for your payment!</h3>";

            // Or go to another URL: actions.redirect('thank_you.html');
          });
        },

        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container");
  }
  initPayPalButton();

  function ticketBtn1() {
    paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "white",
          layout: "vertical",
          label: "paypal",
        },

        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                description: " תשלום על 3 סמינרים - מבוא, מתחילים, מתקדמים",
                amount: { currency_code: "ILS", value: 240 },
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Full available details
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );

            // Show a success message within this page, e.g.
            const element = document.getElementById("paypal-button-container");
            element.innerHTML = "";
            element.innerHTML = "<h3>Thank you for your payment!</h3>";

            // Or go to another URL: actions.redirect('thank_you.html');
          });
        },

        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container-ticket1");
  }
  ticketBtn1();

  function ticketBtn2() {
    paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "white",
          layout: "vertical",
          label: "paypal",
        },

        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                description: " תשלום על 3 סמינרים - מבוא, מתחילים, מתקדמים",
                amount: { currency_code: "ILS", value: 240 },
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) {
            // Full available details
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );

            // Show a success message within this page, e.g.
            const element = document.getElementById("paypal-button-container");
            element.innerHTML = "";
            element.innerHTML = "<h3>Thank you for your payment!</h3>";

            // Or go to another URL: actions.redirect('thank_you.html');
          });
        },

        onError: function (err) {
          console.log(err);
        },
      })
      .render("#paypal-button-container-ticket2");
  }
  ticketBtn2();
}

export default payPalBtns;
