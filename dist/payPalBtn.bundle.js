(()=>{"use strict";(function(){paypal.Buttons({style:{shape:"rect",color:"white",layout:"vertical",label:"paypal"},createOrder:function(e,n){return n.order.create({purchase_units:[{description:"כרטיס לסדנת מבוא לקריפטו",amount:{currency_code:"ILS",value:50}}]})},onApprove:function(e,n){return n.order.capture().then((function(e){console.log("Capture result",e,JSON.stringify(e,null,2));var n=document.getElementById("paypal-button-container");n.innerHTML="",n.innerHTML="<h3>Thank you for your payment!</h3>"}))},onError:function(e){console.log(e)}}).render("#paypal-button-container"),paypal.Buttons({style:{shape:"rect",color:"white",layout:"vertical",label:"paypal"},createOrder:function(e,n){return n.order.create({purchase_units:[{description:" תשלום על 3 סמינרים - מבוא, מתחילים, מתקדמים",amount:{currency_code:"ILS",value:240}}]})},onApprove:function(e,n){return n.order.capture().then((function(e){console.log("Capture result",e,JSON.stringify(e,null,2));var n=document.getElementById("paypal-button-container");n.innerHTML="",n.innerHTML="<h3>Thank you for your payment!</h3>"}))},onError:function(e){console.log(e)}}).render("#paypal-button-container-ticket1"),paypal.Buttons({style:{shape:"rect",color:"white",layout:"vertical",label:"paypal"},createOrder:function(e,n){return n.order.create({purchase_units:[{description:" תשלום על 3 סמינרים - מבוא, מתחילים, מתקדמים",amount:{currency_code:"ILS",value:240}}]})},onApprove:function(e,n){return n.order.capture().then((function(e){console.log("Capture result",e,JSON.stringify(e,null,2));var n=document.getElementById("paypal-button-container");n.innerHTML="",n.innerHTML="<h3>Thank you for your payment!</h3>"}))},onError:function(e){console.log(e)}}).render("#paypal-button-container-ticket2")})()})();