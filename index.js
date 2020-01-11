'use strict'

const express = require('express');
const msnger = require('msnger');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const util = require('util');
const _ = require('lodash');

const app = express()
const sessionStore = new session.MemoryStore;
	// if (process.env.NODE_ENV !== 'production') {
	// 	require('dotenv').config()
	// }
msnger.SERVICE = 'mailgun';
msnger.USERNAME = process.env.USERNAME
msnger.PASS = process.env.PASSWORD
msnger.DESTINATION = process.env.EMAIL


msnger.SUBJECT = function(req) {
	return util.format('%s from %s', req.body.subject, req.body.subject);
};

msnger.BODY = function(req) {
	return util.format('Message: %s \n%s\n%s', req.body.name, req.body.email, req.body.message);
}



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
app.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});
// 
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));

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
	response.render('contact', {flash: response.locals.flash});
});

app.post('/message', function(req, res) {
	let transporter = nodemailer.createTransport({
		service: msnger.SERVICE,
		auth: {
			user: msnger.USERNAME,
			pass: msnger.PASS
		}
	});

	let mailOptions = msnger.setMailOptions(req);

	transporter.sendMail(mailOptions, function(err, responseStatus) {
		if (err) {
			util.log(util.format('ERROR: %j', err));
			req.session.flash = {
				type: 'danger',
				message: 'Something broke!'
			}
		} else {
			util.log(util.format('STATUS: %j', responseStatus));
			util.log('mail sent!');
			req.session.flash = {
				type: 'info',
				message: 'Thank you for contacting us! A team member will get back to you shortly.'
			}
		}

		// Close the SMTP pool.
		transporter.close();
		util.log('SMTP pool closed');

		// Clean up
		transporter = mailOptions = null;
		res.redirect(301, '/contact');
	});
});


app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
