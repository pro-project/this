const express = require('express')
const app = express();
const http = require('http').Server(app);
const watson = require('watson-developer-cloud');
// var auth = require('./auth/auth.js');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/main.html');
  // res.send('Hello World')
})
app.get('/next',function(req,res){
  res.sendFile(__dirname + '/public/next.html')
// res.send('Hello World')
  
})
app.listen(8080, function(){
  // console.log(watson)
  console.log('listening on localhost..8080');
  console.log('DO NOT FORGET TO COMMENT THE CREDENTIALS')
});