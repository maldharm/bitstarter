var express = require('express');
<<<<<<< HEAD
<<<<<<< HEAD
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(24);
  buffer = fs.readFileSync('index.html');
  response.send(buffer.toString("utf-8",0,buffer.length));
=======
=======
>>>>>>> 90fd58e343c29e54fc1d4e19036595500b2bdc21

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
<<<<<<< HEAD
>>>>>>> 90fd58e343c29e54fc1d4e19036595500b2bdc21
=======
>>>>>>> 90fd58e343c29e54fc1d4e19036595500b2bdc21
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});
>>>>>>> 90fd58e343c29e54fc1d4e19036595500b2bdc21
=======
});
>>>>>>> 90fd58e343c29e54fc1d4e19036595500b2bdc21
