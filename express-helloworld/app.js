var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Lo di todo, estoy cansado jefe\n');
});

app.get('/mars', function(req, res) {
  res.send('Estoy Cansado jefe, cansado de verdad!\n');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});




