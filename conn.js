var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "ba82ef6935df8f",
    password: "7ee67dc1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});