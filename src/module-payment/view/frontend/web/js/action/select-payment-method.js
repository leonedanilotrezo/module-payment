define(["jquery","Magento_Checkout/js/model/quote","Magento_Checkout/js/model/full-screen-loader","Magento_Checkout/js/action/get-totals"],function(c,a,b,d){return function(e){a.paymentMethod(e);b.startLoader();c.ajax({url:window.checkoutConfig.payment.dholi_payments.paymentMethodUrl,data:{payment_method:e}}).always(function(){d([]);b.stopLoader()})}});