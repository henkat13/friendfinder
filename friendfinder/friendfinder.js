// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var form = [
    // {
    //   routeName: "",
    //   name: "",
    //   phoneNumber: "",
    //   email: "",
    //   UniqueID:
    // }
];   

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// // app.get("/reserve", function(req, res) {
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });

// app.get("/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.post("/api/tables", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newTables = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
 // newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newTables);

  

//   res.json(newTables);
// });






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });