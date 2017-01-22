var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
});



/*var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('Private route hit!');
		next();
	}
}

app.use(middleware.requireAuthentication);

app.get('/', function (req, res) {
	res.send('Hellow Express!');
});

app.get('/about', function (req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
});*/