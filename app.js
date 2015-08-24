var config = require('./config')
var express = require('express');
var app = module.exports.app = exports.app = express();
var gameSate = require('./game_state');
var socketMap = []; // maps users and sockets

app.use(express.static(__dirname + '/public'));

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    require('./events/user')({io: io, socket: socket, gameSate: gameSate, socketMap: socketMap});
});