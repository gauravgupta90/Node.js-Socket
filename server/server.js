'use strict';

var express = require('express');

var app = express();

var server = require('http').createServer(app);  

var io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client/src'));

server.listen(8000);

console.log('Express app started on port ' + 8000);

var online = 0;

io.on('connection', function(client) {  
    client.on('join', function(data) {
    	online++;
        console.log(online+ " "+data);        
    });

    client.on('messages', function(data) {
          client.emit('broad', data);   // emmit message for onself;
          client.broadcast.emit('broad',data); //emit message for others, i.e broadcast
    });

    client.on('chat_content', function(user_name, chat_content) {
          client.emit('brod_chat_content', user_name, chat_content); // emmit message for onself;
          client.broadcast.emit('brod_chat_content', user_name, chat_content); //emit message for others, i.e broadcast
    });

    client.on('disconnect', function () {
    	   online = online -1;
    	   console.log("User got disconnected..");
      	 console.log(online +" users are live");
  });

});
