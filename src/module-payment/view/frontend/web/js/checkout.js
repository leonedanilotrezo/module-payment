define("jquery underscore ko mage/translate Magento_Checkout/js/model/quote Magento_Checkout/js/model/totals Magento_Catalog/js/price-utils".split(" "),function(m,n,g,h,f,d,k){var b=f.getTotals(),l=g.observable(null);return{placeOrderTotalOrderAmount:function(){b()&&l(b().coupon_code);var a=this.getTotalOrderAmount();a=k.formatPrice(a,f.getPriceFormat());return h("Pay %1").replace("%1",a)},getTotalOrderAmount:function(){var a=0;b()&&(a=d.getSegment("grand_total").value);return a},getShippingAmount:function(){var a=
0;b()&&(a=d.getSegment("shipping").value);return a},getDholiInterest:function(){var a=0;b()&&(a=d.getSegment("dholi_interest").value);return a},getDholiDiscount:function(){var a=0;b()&&(a=Math.abs(d.getSegment("dholi_discount").value));return a},getTotalOrderAmountForInstallments:function(){return this.getTotalOrderAmount()-this.getDholiInterest()+this.getDholiDiscount()},getFirstInstallmentAmount:function(a){if(b()){var c=this.getTotalOrderAmount();c=c-this.getDholiInterest()+this.getDholiDiscount()}var e=
c;0<this.getPercentualDiscount(a)&&(e=this.getShippingAmount(),e=c-(c-e)*this.getPercentualDiscount(a)/100);return e},getMinInstallment:function(a){return window.checkoutConfig.payment[a].minInstallment},getPercentualDiscount:function(a){return window.checkoutConfig.payment[a].percentualDiscount},getPaymentUrl:function(){return window.checkoutConfig.payment.dholi_payments.paymentMethodUrl}}});
