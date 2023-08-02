const express = require("express"); 
var db = require("./database.js")
const app = express(); 
const port = process.env.PORT || 3001; 


var sqlite3 = require('sqlite3');
if (false){
let db = new sqlite3.Database('words.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the words database.');
});
} 
db.run("insert into v values ('fh1')");


var rw = 'ggg'

db.get("SELECT * FROM v", (error, row) => {
  rw = row
    console.log("============id: " + row.id);
});








app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
 });
 
app.get('/hello', (req, res) => {
   res.send('Hello World, from express');
 });
 
app.get('/db', (req, res) => {
  db.get("SELECT * FROM v", (error, row) => {
  rw = row
    res.send(rw)
});
});

app.get('/hi', (req, res) => {  
res.json({ a: 1 });
});
  
 const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
  
 server.keepAliveTimeout = 120 * 1000; 
 server.headersTimeout = 120 * 1000;
 
 
db.close()
