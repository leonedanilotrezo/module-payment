define(["Dholi_Payment/js/payment"],function(a){return a.extend({defaults:{},initialize:function(){this._super();let self=this},initObservable:function(){this._super().observe([]);return this},getInstructions:function(){return window.checkoutConfig.payment[this.getCode()].instructions}})});