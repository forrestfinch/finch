'use strict'

const express = require('express');
const msnger = require('msnger');
const app = express();


msnger.SERVICE = 'mailgun';
msnger.USERNAME = process.env.USERNAME
msnger.PASS = process.env.PASSWORD
msnger.DESTINATION = process.env.EMAIL


msnger.SUBJECT = function (req) {
	return util.format('Important message from %s', req.body.name);
};

msnger.BODY = function (req) {
	return util.format('Message: %s \n%s\n%s', req.body.name, req.body.email);
}

// // msnger.startServer(); // start the messaging server 
// 
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('pages/index');
});

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});