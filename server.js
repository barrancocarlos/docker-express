// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var exphbs = require('express-handlebars'); //handlebars
var path = require('path'); //path
var config = require('./config/config'); //env variables


// configuration =================

// log every request to the console
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
// parse application/vnd.api+json as json
app.use(methodOverride('_method')); // put and delete
// define template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// routes =========================

require('./routes/routes')(app); // pass configured passport

// Error Handling ======================================================================

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(404).send('404: Page not found');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500: Internal Server Error');
});


// Port ======================================================================
app.listen(config.port);
console.log("Running at " + config.port);
console.log(process.env.NODE_ENV);
