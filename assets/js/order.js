var order = {};

order.diner1 = [],
order.diner2 = [];

order.getTotal = function(diner) {
  
  if(!this['diner' + diner].length) {
    return
  }

  var total = 0;

  _.forEach(this['diner' + diner], function(item) {
      total += item.price;
  });

  return total;
};

module.exports = order;