define(["jquery","Magento_Checkout/js/model/quote","Magento_Checkout/js/model/full-screen-loader","Magento_Checkout/js/action/get-totals"],function(c,d,a,e){return function(b){d.paymentMethod(b);a.startLoader();c.ajax({url:window.checkoutConfig.payment.dholi_payments.paymentMethodUrl,data:{payment_method:b}}).always(function(){e([]);a.stopLoader()})}});
