define("underscore jquery ko Dholi_Payment/js/payment Magento_Checkout/js/model/quote Dholi_Payment/js/payform Dholi_Payment/js/checkout Magento_Checkout/js/action/get-totals Magento_Checkout/js/model/full-screen-loader".split(" "),function(q,e,h,l,g,c,f,m,k){var n=h.observable(null);return l.extend({defaults:{creditCardBrand:"",creditCardBrandIcon:"",creditCardExpiry:"",creditCardCvv:"",creditCardNumber:"",creditCardNumberStatus:"",creditCardExpiryStatus:"",creditCardCvvStatus:""},installments:h.observableArray(),
initialize:function(){this._super();var a=this;this.creditCardNumber.subscribe(function(b){a.creditCardNumberStatusListen(b);a.paymentErrors(""!=a.creditCardNumberStatus()?e.mage.__("Invalid Credit Card Number"):"")});n.subscribe(function(){a.clearCreditCardInfo()},null,"change");g.paymentMethod.subscribe(function(){a.clearCreditCardInfo()},null,"change");g.shippingMethod.subscribe(function(){a.clearCreditCardInfo()},null,"change")},clearCreditCardInfo:function(){this.creditCardNumber("");this.creditCardBrand("");
this.creditCardBrandIcon("");this.creditCardExpiry("");this.creditCardCvv("");this.installments.removeAll()},initObservable:function(){this._super().observe("creditCardBrand creditCardBrandIcon creditCardNumber creditCardExpiry creditCardCvv installments creditCardNumberStatus creditCardExpiryStatus creditCardCvvStatus injectPaymentBehavior".split(" "));return this},creditCardNumberStatusListen:function(a){var b=this.status.INITIAL;if(a){var d=c.parseCardType(a);if(d){this.creditCardBrand(d);d=c.lengthFromType(d);
var p=a.match(/[0-9]+/g).join([]).length;-1<d.indexOf(p)&&(b=c.validateCardNumber(a)?this.status.SUCCESS:this.status.ERROR)}this.isShowCreditCardBrandIcon()&&(a=window.checkoutConfig.payment[this.getCode()].icons.brands[this.creditCardBrand()],void 0!==a&&this.creditCardBrandIcon(a))}this.creditCardNumberStatus(b)},creditCardExpiryStatusListen:function(){var a=this.status.INITIAL,b=this.creditCardExpiry();b&&(a=c.parseCardExpiry(b),a=c.validateCardExpiry(a)?this.status.SUCCESS:this.status.ERROR);
this.creditCardExpiryStatus(a)},creditCardCvvStatusListen:function(){var a=this.status.INITIAL,b=this.creditCardCvv();b&&(a=c.validateCardCVC(b,this.creditCardBrand)?this.status.SUCCESS:this.status.ERROR);this.creditCardCvvStatus(a)},getVaultCode:function(){return window.checkoutConfig.payment[this.getCode()].ccVaultCode},injectPaymentBehavior:function(){var a=document.getElementById(this.getCode().concat("_number")),b=document.getElementById(this.getCode().concat("_expiry")),d=document.getElementById(this.getCode().concat("_cvv"));
c.cardNumberInput(a);c.expiryInput(b);c.cvcInput(d)},getTotalOrderAmountForInstallments:function(){return f.getTotalOrderAmountForInstallments()},getFirstInstallmentAmount:function(){return f.getFirstInstallmentAmount()},getTotalInstallments:function(){return f.getTotalInstallments()},getMinInstallment:function(){return f.getMinInstallment()},getPercentualDiscount:function(){return f.getPercentualDiscount()},getInstallmentsUrl:function(){return f.getInstallmentsUrl()},isShowCreditCardBrandIcon:function(){return window.checkoutConfig.payment[this.getCode()].icons.show},
reloadTotals:function(){k.startLoader();e.ajax({dataType:"json",method:"POST",data:{"payment[method]":g.paymentMethod().method,"payment[cc_installments]":e("#".concat(this.getCode()).concat("_installments")).val(),"payment[shipping_amount]":this.getShippingAmount()},url:this.getPaymentUrl(),context:document.body}).done(function(a){m([],e.Deferred())}).fail().always(function(){k.stopLoader()})},getCvvImageUrl:function(){return window.checkoutConfig.payment[this.getCode()].url.cvv},getCvvImageHtml:function(){return'<img src="'+
this.getCvvImageUrl()+'" alt="'+e.mage.__("Card Verification Number Visual Reference")+'" title="'+e.mage.__("Card Verification Number Visual Reference")+'" />'}})});
