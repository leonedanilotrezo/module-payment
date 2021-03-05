define("underscore jquery ko mage/translate mage/storage Dholi_Core/js/model/url-builder Dholi_Payment/js/payment Dholi_Payment/js/payform Dholi_Payment/js/checkout Magento_Checkout/js/model/quote Magento_Checkout/js/model/full-screen-loader Magento_Checkout/js/action/get-totals".split(" "),function(r,g,h,d,l,m,n,e,c,f,k,p){var q=h.observable(null);return n.extend({defaults:{creditCardBrand:"",creditCardBrandIcon:"",creditCardExpiry:"",creditCardCvv:"",creditCardNumber:"",creditCardNumberStatus:"",
creditCardExpiryStatus:"",creditCardCvvStatus:""},installments:h.observableArray(),initialize:function(){this._super();var a=this;this.creditCardNumber.subscribe(function(b){a.creditCardNumberStatusListen(b);a.paymentErrors(""!=a.creditCardNumberStatus()?d("Invalid Credit Card Number"):"")});q.subscribe(function(){a.clearCreditCardInfo()},null,"change");f.paymentMethod.subscribe(function(){a.clearCreditCardInfo()},null,"change");f.shippingMethod.subscribe(function(){a.clearCreditCardInfo()},null,
"change")},reloadTotals:function(){var a=g("#".concat(this.getCode()).concat("_installments")).val();k.startLoader();l.post(m.createUrl("/dholi/payment/totals",{}),JSON.stringify({paymentMethod:{method:f.paymentMethod().method,additional_data:{installments:a?a:0}},shippingAmount:this.getShippingAmount()}),!1).done(function(b){p([],g.Deferred())}).fail().always(function(){k.stopLoader()})},clearCreditCardInfo:function(){this.creditCardNumber("");this.creditCardBrand("");this.creditCardBrandIcon("");
this.creditCardExpiry("");this.creditCardCvv("");this.installments.removeAll()},initObservable:function(){this._super().observe("creditCardBrand creditCardBrandIcon creditCardNumber creditCardExpiry creditCardCvv installments creditCardNumberStatus creditCardExpiryStatus creditCardCvvStatus".split(" "));return this},creditCardExpiryStatusListen:function(){var a=this.status.INITIAL,b=this.creditCardExpiry();b&&(a=e.parseCardExpiry(b),a=e.validateCardExpiry(a)?this.status.SUCCESS:this.status.ERROR);
this.creditCardExpiryStatus(a)},creditCardCvvStatusListen:function(){var a=this.status.INITIAL,b=this.creditCardCvv();b&&(a=e.validateCardCVC(b,this.creditCardBrand)?this.status.SUCCESS:this.status.ERROR);this.creditCardCvvStatus(a)},getVaultCode:function(a){return window.checkoutConfig.payment[a].ccVaultCode},getTotalOrderAmountForInstallments:function(){return c.getTotalOrderAmountForInstallments()},getFirstInstallmentAmount:function(a){return c.getFirstInstallmentAmount(a)},getMinInstallment:function(a){return c.getMinInstallment(a)},
getPercentualDiscount:function(a){return c.getPercentualDiscount(a)},getCvvImageUrl:function(){return window.checkoutConfig.payment[this.getCode()].url.cvv},getCvvImageHtml:function(){return'<img src="'+this.getCvvImageUrl()+'" alt="'+d("Card Verification Number Visual Reference")+'" title="'+d("Card Verification Number Visual Reference")+'" />'}})});
