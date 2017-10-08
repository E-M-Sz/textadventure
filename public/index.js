var socket;

socket.emit('test','test');

socket.on('test', function(data){
  console.log('Recieved: ' + data);
});
