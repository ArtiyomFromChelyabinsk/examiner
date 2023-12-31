// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var path = require("path")


// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
 
app.get('/', function (req, res, next) {
    res.render('index.html');
})








// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});



// Root endpoint
// app.get("/", (req, res, next) => {
//  res.json({ "message": "Ok" })
// });

app.get("/api/all", (req, res, next) => {
    var sql = "select * from user"
    sql = "select * from v"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});
// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res) {
  res.status(404);
});