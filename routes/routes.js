var express  = require('express');
var app      = express();
var exphbs  = require('express-handlebars');

//import controller
var controller = require('../controller/controller');

//api function export
module.exports = function(app) {

//home Page
app.get('/', controller.getMarvel);


};//end function
