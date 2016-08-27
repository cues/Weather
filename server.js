var express = require('express');

//create the app

var app = express();

// server to use , allows you to use functionality
app.use(express.static('public'));

app.listen(1707, function(){
  console.log('Expres server is up on port 1707');
});
