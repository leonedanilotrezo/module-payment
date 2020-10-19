define([""],function(){var A=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},k=function(a){if(null!=a.selectionStart)return a.selectionStart;if(null!=document.selection){a.focus();var b=document.selection.createRange();var c=a.createTextRange();a=c.duplicate();c.moveToBookmark(b.getBookmark());a.setEndPoint("EndToStart",c);return a.text.length}},d=function(a){return function(b){null==b&&(b=window.event);if("insertCompositionText"!==b.inputType||
b.isComposing)return a({target:b.target||b.srcElement,which:b.which||b.keyCode,type:b.type,metaKey:b.metaKey,ctrlKey:b.ctrlKey,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1}})}},q=function(a){var b;a=(a+"").replace(/\D/g,"");var c=0;for(b=t.length;c<b;c++){var e=t[c];if(e.pattern.test(a))return e}},B=function(a){var b;var c=0;for(b=t.length;c<b;c++){var e=t[c];if(e.type===a)return e}},u=function(a){return(a=getComputedStyle(a))&&a.direction||document.dir},v=function(a){var b;
return null!=("undefined"!==typeof document&&null!==document?null!=(b=document.selection)?b.createRange:void 0:void 0)&&document.selection.createRange().text?!0:null!=a.selectionStart&&a.selectionStart!==a.selectionEnd},w=function(a){var b;null==a&&(a="");var c="";var e=a.split("");var g=0;for(b=e.length;g<b;g++){a=e[g];var f="\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19".indexOf(a);-1<f&&(a="0123456789"[f]);c+=a}return c},x=function(a){if(""!==a.target.value){var b=k(a.target);a.target.value=
w(a.target.value).replace(/\D/g,"").slice(0,4);if(null!=b&&"change"!==a.type)return a.target.setSelectionRange(b,b)}},C=function(a){if(""!==a.target.value){a.target.value=y.formatCardExpiry(a.target.value);"rtl"===u(a.target)&&-1===a.target.value.indexOf("\u200e\u200e")&&(a.target.value="\u200e\u200e".concat(a.target.value));var b=k(a.target);if(null!=b&&"change"!==a.type)return a.target.setSelectionRange(b,b)}},z=function(a){var b=k(a.target);if(""!==a.target.value&&("ltr"===u(a.target)&&(b=k(a.target)),
a.target.value=y.formatCardNumber(a.target.value),"ltr"===u(a.target)&&b!==a.target.selectionStart&&k(a.target),"rtl"===u(a.target)&&-1===a.target.value.indexOf("\u200e\u200e")&&(a.target.value="\u200e\u200e".concat(a.target.value)),b=k(a.target),null!=b&&0!==b&&"change"!==a.type))return a.target.setSelectionRange(b,b)},m=function(a){if(!(a.metaKey||a.ctrlKey||-1<[p.UNKNOWN,p.ARROW_LEFT,p.ARROW_RIGHT].indexOf(a.which)||a.which<p.PAGE_UP)){var b=String.fromCharCode(a.which);if(!/^\d+$/.test(b))return a.preventDefault()}},
l=function(a,b,c){var e;var g=0;for(e=b.length;g<e;g++){var f=b[g];if(c){var n=a,r=f.eventName;f=f.eventHandler;null!=n.removeEventListener?n.removeEventListener(r,f,!1):n.detachEvent("on"+r,f)}else n=a,r=f.eventName,f=f.eventHandler,null!=n.addEventListener?n.addEventListener(r,f,!1):n.attachEvent("on"+r,f)}},p={UNKNOWN:0,BACKSPACE:8,PAGE_UP:33,ARROW_LEFT:37,ARROW_RIGHT:39},h=/(\d{1,4})/g,t=[{type:"elo",pattern:/^((509091)|(636368)|(636297)|(504175)|(438935)|(40117[8-9])|(45763[1-2])|(457393)|(431274)|(50990[0-2])|(5099[7-9][0-9])|(50996[4-9])|(509[1-8][0-9][0-9])|(5090(0[0-2]|0[4-9]|1[2-9]|[24589][0-9]|3[1-9]|6[0-46-9]|7[0-24-9]))|(5067(0[0-24-8]|1[0-24-9]|2[014-9]|3[0-379]|4[0-9]|5[0-3]|6[0-5]|7[0-8]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(6504(8[5-9]|9[0-9])|6505(0[0-9]|1[0-9]|2[0-9]|3[0-8]))|(6505(4[1-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(65072[0-7])|(6509(0[1-9]|1[0-9]|20))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[0-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8])))\d*$/,
format:h,length:[16],cvcLength:[3],luhn:!0},{type:"visaelectron",pattern:/^4(026|17500|405|508|844|91[37])/,format:h,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",pattern:/^(5018|5020|5038|6304|6390[0-9]{2}|67[0-9]{4})/,format:h,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",pattern:/^600/,format:h,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",pattern:/^5019/,format:h,length:[16],cvcLength:[3],luhn:!0},{type:"visa",pattern:/^4/,format:h,length:[13,16,
19],cvcLength:[3],luhn:!0},{type:"mastercard",pattern:/^(5[1-5][0-9]{4}|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)([0-9]{2})/,format:h,length:[16],cvcLength:[3],luhn:!0},{type:"amex",pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[4],luhn:!0},{type:"hipercard",pattern:/^(606282\d{10}(\d{3})?)|(3841\d{15})/,format:h,length:[14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"dinersclub",pattern:/^(36|38|30[0-5])/,format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],
luhn:!0},{type:"discover",pattern:/^6(011|22126|22925|4[4-9]|5)/,format:h,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",pattern:/^62/,format:h,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",pattern:/^(?:2131|1800|35\d{3})/,format:h,length:[16,17,18,19],cvcLength:[3],luhn:!0},{type:"laser",pattern:/^(6706|6771|6709)/,format:h,length:[16,17,18,19],cvcLength:[3],luhn:!0}],D=[{eventName:"keypress",eventHandler:d(m)},{eventName:"keypress",eventHandler:d(function(a){var b=String.fromCharCode(a.which);
if(/^\d+$/.test(b)&&!v(a.target)&&4<(a.target.value+b).length)return a.preventDefault()})},{eventName:"paste",eventHandler:d(x)},{eventName:"change",eventHandler:d(x)},{eventName:"input",eventHandler:d(x)}],E=[{eventName:"keypress",eventHandler:d(m)},{eventName:"keypress",eventHandler:d(function(a){var b=String.fromCharCode(a.which);if(/^\d+$/.test(b)&&!v(a.target)&&(b=a.target.value+b,b=b.replace(/\D/g,""),6<b.length))return a.preventDefault()})},{eventName:"keypress",eventHandler:d(function(a){var b=
String.fromCharCode(a.which);if(/^\d+$/.test(b)){var c=a.target.value+b;if(/^\d$/.test(c)&&"0"!==c&&"1"!==c)return a.preventDefault(),setTimeout(function(){return a.target.value="0"+c+" / "});if(/^\d\d$/.test(c))return a.preventDefault(),setTimeout(function(){return a.target.value=c+" / "})}})},{eventName:"keypress",eventHandler:d(function(a){var b=String.fromCharCode(a.which);if("/"===b||" "===b)if(b=a.target.value,/^\d$/.test(b)&&"0"!==b)return a.target.value="0"+b+" / "})},{eventName:"keypress",
eventHandler:d(function(a){var b=String.fromCharCode(a.which);if(/^\d+$/.test(b)&&(b=a.target.value,/^\d\d$/.test(b)))return a.target.value=b+" / "})},{eventName:"keydown",eventHandler:d(function(a){var b=a.target.value;if(a.which===p.BACKSPACE){var c=k(a.target);if((!c||c===b.length)&&/\d\s\/\s$/.test(b))return a.preventDefault(),setTimeout(function(){return a.target.value=b.replace(/\d\s\/\s$/,"")})}})},{eventName:"change",eventHandler:d(C)},{eventName:"input",eventHandler:d(C)}],F=[{eventName:"keypress",
eventHandler:d(m)},{eventName:"keypress",eventHandler:d(function(a){var b=String.fromCharCode(a.which);if(/^\d+$/.test(b)&&!v(a.target)){var c=(a.target.value+b).replace(/\D/g,"");b=q(c);if(c.length>(b?b.length[b.length.length-1]:16))return a.preventDefault()}})},{eventName:"keypress",eventHandler:d(function(a){var b=String.fromCharCode(a.which);if(/^\d+$/.test(b)){var c=a.target.value;var e=q(c+b);var g=(c.replace(/\D/g,"")+b).length;var f=16;e&&(f=e.length[e.length.length-1]);if(!(g>=f||(g=k(a.target),
g&&g!==c.length))){e=e&&"amex"===e.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/;if(e.test(c))return a.preventDefault(),setTimeout(function(){return a.target.value=c+" "+b});if(e.test(c+b))return a.preventDefault(),setTimeout(function(){return a.target.value=c+b+" "})}}})},{eventName:"keydown",eventHandler:d(function(a){var b=a.target.value;if(a.which===p.BACKSPACE){var c=k(a.target);if(!(c&&c!==b.length||1<a.target.selectionEnd-a.target.selectionStart)){if(/\d\s$/.test(b))return a.preventDefault(),
setTimeout(function(){return a.target.value=b.replace(/\d\s$/,"")});if(/\s\d?$/.test(b))return a.preventDefault(),setTimeout(function(){return a.target.value=b.replace(/\d$/,"")})}}})},{eventName:"paste",eventHandler:d(z)},{eventName:"change",eventHandler:d(z)},{eventName:"input",eventHandler:d(z)}],G=[{eventName:"keypress",eventHandler:d(m)},{eventName:"paste",eventHandler:d(m)},{eventName:"change",eventHandler:d(m)},{eventName:"input",eventHandler:d(m)}];d=function(){};d.prototype.cvcInput=function(a){return l(a,
D)};d.prototype.expiryInput=function(a){return l(a,E)};d.prototype.cardNumberInput=function(a){return l(a,F)};d.prototype.numericInput=function(a){return l(a,G)};d.prototype.detachCvcInput=function(a){return l(a,D,!0)};d.prototype.detachExpiryInput=function(a){return l(a,E,!0)};d.prototype.detachCardNumberInput=function(a){return l(a,F,!0)};d.prototype.detachNumericInput=function(a){return l(a,G,!0)};d.prototype.parseCardExpiry=function(a){a=a.replace(/\s/g,"");var b=a.split("/",2);a=b[0];var c=b[1];
2===(null!=c?c.length:void 0)&&/^\d+$/.test(c)&&(b=(new Date).getFullYear(),b=b.toString().slice(0,2),c=b+c);a=parseInt(a.replace(/[\u200e]/g,""),10);c=parseInt(c,10);return{month:a,year:c}};d.prototype.parseCardType=function(a){if(!a)return null;var b;return(null!=(b=q(a))?b.type:void 0)||null};d.prototype.lengthFromType=function(a){a=B(a);return"undefined"!=a?a.length:null};d.prototype.validateCardNumber=function(a){a=(a+"").replace(/\s+|-/g,"");if(!/^\d+$/.test(a))return!1;var b;var c=q(a);if(!c)return!1;
var e;if(e=(b=a.length,0<=A.call(c.length,b))){if(!(b=!1===c.luhn)){var g;b=!0;c=0;e=(a+"").split("").reverse();var f=0;for(g=e.length;f<g;f++){a=e[f];a=parseInt(a,10);if(b=!b)a*=2;9<a&&(a-=9);c+=a}b=0===c%10}e=b}return e};d.prototype.validateCardExpiry=function(a,b){"object"===typeof a&&"month"in a&&(b=a,a=b.month,b=b.year);if(!a||!b)return!1;a=String(a).trim();b=String(b).trim();if(!(/^\d+$/.test(a)&&/^\d+$/.test(b)&&1<=a&&12>=a))return!1;2===b.length&&(b=70>b?"20"+b:"19"+b);if(4!==b.length)return!1;
b=new Date(b,a);a=new Date;b.setMonth(b.getMonth()-1);b.setMonth(b.getMonth()+1,1);return b>a};d.prototype.validateCardCVC=function(a,b){var c;a=String(a).trim();if(!/^\d+$/.test(a))return!1;b=B(b);return null!=b?(c=a.length,0<=A.call(b.cvcLength,c)):3<=a.length&&4>=a.length};d.prototype.formatCardNumber=function(a){var b;a=w(a);a=a.replace(/\D/g,"");var c=q(a);if(!c)return a;a=a.slice(0,c.length[c.length.length-1]);if(c.format.global)return null!=(b=a.match(c.format))?b.join(" "):void 0;a=c.format.exec(a);
if(null!=a)return a.shift(),a=a.filter(Boolean),a.join(" ")};d.prototype.formatCardExpiry=function(a){a=w(a);var b=a.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);if(!b)return"";a=b[1]||"";var c=b[2]||"";b=b[3]||"";0<b.length?c=" / ":" /"===c?(a=a.substring(0,1),c=""):2===a.length||0<c.length?c=" / ":1===a.length&&"0"!==a&&"1"!==a&&(a="0"+a,c=" / ");return a+c+b};var y=new d;return y});
