var express = require('express');

//create the app

var app = express();
const PORT = process.env.PORT || 1707; /*HEROKU */

// CHECK IF THE TRAFFIC IS ON HTTP
app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});


// server to use , allows you to use functionality
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Expres server is up on port' + PORT);
});
