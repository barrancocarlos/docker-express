var request = require('request'); // request 3rd party api
var config = require('../config/config'); //env variables

//get all movies
exports.getMarvel = function (req, res) {
  request.get({
      url: config.marvel,
      json: true
    },
    function(err, data) {
      if (err) {
        return next(err);
      }
      console.log(data);
      datax = data.body;
      res.render('index', {
        user: datax
      });
    });
};
