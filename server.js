
var express = require('express');
var app = express();
var compression = require('compression');
app.use(compression());
app.use('/', express.static('app'));

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
