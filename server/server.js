var express = require('express'),
    Routes = require('./routes'),
    Db = require('./config/db'),
    config = require('./config/config');
var bodyParser = require('body-parser');    
    
var app = express();

app.use(express.static(__dirname + '/../client/src'));

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

var port = config.server.port;

app.listen(port);

console.log('Express app started on port ' + port);
