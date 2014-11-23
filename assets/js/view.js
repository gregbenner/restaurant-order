var view = {};
var menu = {};


view.init = function(data) {
  menu.menuitems = data;
  var source = $("#menu-template").html(),
    template = Handlebars.compile(source); 
    $('.left-menu').append(template(menu));
    $('.right-menu').append(template(menu));
};

module.exports = view;