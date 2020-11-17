// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "pt4a2acbc4v8pajf",
  password: "m5w1t3l9uzknkp9m",
  database: "b0vic5kh0q9x1gbi"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
