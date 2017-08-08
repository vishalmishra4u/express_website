var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'jade');

app.get('/',function(req, res){
  res.render('index');
});

app.listen(3000);
console.log('Server is running on port 3000');
