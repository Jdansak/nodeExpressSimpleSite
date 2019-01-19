var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  console.log('Hello, We are in your function');
  res.render('index',{'title': 'Welcome from a varible'});
});

app.get('/about', function (req, res) {
  console.log('Hello, We are in your function');
  res.render('about');
});
app.get('/contact', function (req, res) {
  console.log('Hello, We are in your function');
  res.render('contact');
});
app.listen(3000);
console.log('Server is listening on port 3000');


