var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/toggle', function(req, res) {
  io.emit('toggle', { data: 'test' });
  res.sendStatus(200);
});
  

io.on('connection', function(socket) {
  console.log('client connected');
  socket.on('disconnect', function(){
    console.log('client disconnected');
  });
});

var port = process.env.PORT || 3000;

http.listen(port, function() {
  console.log('Listening on port :' + port);
});
