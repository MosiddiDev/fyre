// var express = require('express');
// var cors = require('cors');
// var request = require('request');
// var bodyParser = require('body-parser');
//
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
//
// server.listen(5002);
//
// app.use(cors())
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//
// app.set('port', (process.env.PORT || 5001));
// app.use(express.static(__dirname + '/build'));
// app.use(express.static(__dirname + '/node_modules'));
//
//
// app.get('/', function(req, res) {
//   res.sendfile('./build/index.html');
// });
//
// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'));
// });
