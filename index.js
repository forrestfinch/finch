'use strict'

const express = require('express');
const msnger = require('msnger');
const cors = require('cors')

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const util = require('util')
const _ = require('lodash')

const app = express()
	// if (process.env.NODE_ENV !== 'production') {
	// 	require('dotenv').config()
	// }
msnger.SERVICE = 'mailgun';
msnger.USERNAME = process.env.USERNAME
msnger.PASS = process.env.PASSWORD
msnger.DESTINATION = process.env.EMAIL


msnger.SUBJECT = function(req) {
	return util.format('Important message from %s', req.body.name);
};

msnger.BODY = function(req) {
	return util.format('Message: %s \n%s\n%s', req.body.name, req.body.email, req.body.message);
}



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// 
app.set('port', (process.env.PORT || 5000));

app.use('/assets', express.static('assets'));
app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index');
});

app.get('/us', function(request, response) {
	response.render('about');
});

app.get('/services', function(request, response) {
	response.render('services');
});

app.get('/contact', function(request, response) {
	response.render('contact');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

app.post('/message', function(req, res) {
	var transporter = nodemailer.createTransport({
		service: msnger.SERVICE,
		auth: {
			user: msnger.USERNAME,
			pass: msnger.PASS
		}
	});

	var mailOptions = msnger.setMailOptions(req);

	transporter.sendMail(mailOptions, function(err, responseStatus) {
		if (err) {
			util.log(util.format('ERROR: %j', err));
			res.status(500).send('Something broke!');
		} else {
			util.log(util.format('STATUS: %j', responseStatus));
			util.log('mail sent!');
			res.send(true);
		}

		// Close the SMTP pool.
		transporter.close();
		util.log('SMTP pool closed');

		// Clean up
		transporter = mailOptions = null;
	});
});