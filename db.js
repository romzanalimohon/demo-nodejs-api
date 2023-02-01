const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

con.connect((err) => {
  if (!err) {
    console.log("DB connection succeed");
  } else {
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = con;
