/* Showing Mongoose's "Populated" Method (18.3.8)
 * INSTRUCTOR ONLY
 * =============================================== */

// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
/*var logger = require('morgan');*/

// Notice: Our scraping tools are prepared, too

var exphbs  = require('express-handlebars');

// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// use morgan and bodyparser with our app
/*app.use(logger('dev'));*/
app.use(bodyParser.urlencoded({
  extended: false
}));

// make public a static dir
app.use(express.static('public'));

var routes = require('./controllers/controller.js');
app.use('/', routes);

// listen on port 3000
app.listen(3001, function() {
  console.log('App running on port 3001!');
});
