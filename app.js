var express = require('express');

var app = express();

var server = app.listen(3000, () => {
  console.log('Server listens on port 3000');
});

app.use(express.static('public'));

var io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {
  console.log("New client: " + socket.id);

  socket.on('mouse', function(data) {
    console.log("Received:" + data);

    socket.broadcast.emit('mouse', data);
  });

  socket.on('disconnect', function() {
    console.log("Client has disconnected");
  });
});
