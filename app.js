var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/ecommerce', express.static(__dirname + '/ecommerce'));
app.use('/d3-demo', express.static(__dirname + '/d3-demo'));

app.get('/ecommerce', function(request, response) {
	response.render('ecommerce/index.html');
});

app.get('/d3-demo', function(request, response) {
	response.render('d3-demo/index.html');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
});
