var net = require('net');
var port = process.argv[2];

function addZero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

var server = net.createServer(function(socket){
  var date = new Date();
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDate());
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  
  var fullDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
  
  socket.end(fullDate);
});


server.listen(port);

