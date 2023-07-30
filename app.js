const express = require("express"); 

 const app = express(); 
 const port = process.env.PORT || 3001; 
 
 app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
 });
  
 const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
  
 server.keepAliveTimeout = 120 * 1000; 
 server.headersTimeout = 120 * 1000; 