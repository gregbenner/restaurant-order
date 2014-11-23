var controller = {};
var view = require('./view');
var menu = require('./menu');
var order = require('./order');

controller.init = function() {
  view.init(menu);
  this.listeners();
};

controller.listeners = function () {
  var _this = this;
  $('input').on('change', function() {
    var $this = $(this);
    var thisDiner = $this.parents('.menu-hold').data('diner');
    var thisItem = $this.parents('.menuitem')
    var item = {};

    item.name = thisItem.find('.name').text();
    item.price = parseFloat(thisItem.find('.price').text())
    item.checked = $this.attr('checked');
    item.diner = thisDiner;

    console.log(item)
    _this.handleMenuItem(item);
  });
};

controller.handleMenuItem = function (item) {
  if (item.checked) {
    this.addItem(item);
  } else {
     this.removeItem(item);
  }
};

controller.addItem = function(item) {
  var diner = order['diner' + item.diner];
  var itemAlreadyOrder = _.find(diner, function(selection) {
    return selection.name === item.name;
  });

  if (itemAlreadyOrder) {
    return;
  }

  diner.push(item);

  console.log(order.getTotal(item.diner));
} 

controller.removeItem = function(item) {

}

module.exports = controller;