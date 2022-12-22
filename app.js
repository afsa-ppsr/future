// Load external dependencies
var express = require('express');

// Ready up Express so we can start using it
var app = express();

var exphbs = require('express-handlebars');

// Register '.handlebars' extension with exphbs
app.engine('handlebars', exphbs());
// Set our default template engine to "handlebars"
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('header');
});
