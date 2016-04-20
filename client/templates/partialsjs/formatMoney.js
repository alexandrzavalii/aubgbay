UI.registerHelper('formatMoney', function(price) {
 return accounting.formatMoney(price, { symbol: "BGN",  format: "%v %s" }); ;
});
