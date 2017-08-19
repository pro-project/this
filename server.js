const express = require('express')
const app = express();
const http = require('http').Server(app);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
//   res.send('Hello World')
})

app.listen(8080, function(){
  // console.log(watson)
  console.log('listening on localhost..8080');
});