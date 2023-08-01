const express = require("express"); 

const app = express(); 
const port = process.env.PORT || 3001; 
 
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
 });
 
app.get('/hello', (req, res) => {
   res.send('Hello World, from express');
 });
 
app.get('/db', (req, res) => {
  var sqlite3 = require('sqlite3');
 
 var db = new sqlite3.Database('example.db');
 
 db.serialize(function() {
  // Create a table
  db.run("CREATE TABLE IF NOT EXISTS Foo (id INTEGER PRIMARY KEY, name TEXT)");
 
  // Insert data into the table
  db.run("INSERT INTO Foo (name) VALUES ('bar')");
 
  // Query data from the table
  db.each("SELECT id, name FROM Foo", function(err, row) {
    res.send(row.id)
    
  });
 });
 
 db.close();
   res.send('Hello World, from express');
 });

app.get('/hi', (req, res) => {  
res.json({ a: 1 });
});
  
 const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 
  
 server.keepAliveTimeout = 120 * 1000; 
 server.headersTimeout = 120 * 1000;
 
 
 