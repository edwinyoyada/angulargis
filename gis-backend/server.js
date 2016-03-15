// BASE SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/gis');

var Organization = require('./models/organization');


// API ROUTES
var router = express.Router();

router.use(function(req, res, next) {
	console.log('middleware activated');
	next();
})

router.get('/', function (req, res) {
	res.json({message: 'asdfasdfasdf'});
});

router.route('/organizations')
		.post(function(req, res) {
			var org = new Organization();
			org.name = req.body.name;
			org.address = req.body.address;
			org.telp = req.body.telp;
			// org.coord = { latitude: req.body.latitude, longitude: req.body.longitude };
			org.website = req.body.website;
			org.fs = req.body.fs;
			org.pusat = req.body.pusat;

			org.save(function(err) {
				if(err)
					res.send(err);

				res.json({ message: 'New organization data added!'});
			});
		})
		.get(function(req, res) {
			Organization.find(function (err, orgs) {
				if(err)
					res.send(err);

				res.json(orgs);
			})
		});

//ROUTES REGISTRATION
app.use('/api', router);

//SERVER STARTS
app.listen(port);

console.log('magic in ' + port);