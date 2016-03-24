// BASE SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/gis');

var organizationLogic = require('./logics/organization');

// API ROUTES
var router = express.Router();

router.use(function(req, res, next) {
	// console.log('middleware activated');
	// Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://gis.local:8000');
    //
    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //
    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
	next();
})

router.get('/', function (req, res) {
	res.json({message: 'asdfasdfasdf'});
});

router.route('/organizations')
		.post(function(req, res) {
			organizationLogic.postData(req, function(data) {
				res.json({ message: data.message });
			});
		})
		.get(function(req, res) {
			organizationLogic.getData(req, function(data) {
				res.json({ message: data.message });
			});
		});

//ROUTES REGISTRATION
app.use('/api', router);

//SERVER STARTS
app.listen(port);

console.log('magic in ' + port);
