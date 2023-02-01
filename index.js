const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const con = require("./db");
const app = express();

const port = 1000;

var corsOptions = {
  origin: "*",
  Credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("server ta khola ase");
});

//get user data
app.get("/testdata", (req, res) => {
  con.query("select * from user_table", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//add user data
app.post("/testdata", (req, res) => {
  con.query(
    `INSERT into user_table (uname, uemail, upassword) VALUES ("${req.body.uname}","${req.body.uemail}","${req.body.upassword}");`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

//update user data
app.put("/testdata/:uid", (req, res) => {
  con.query(
    `UPDATE user_table SET uname = "${req.body.uname}", uemail = "${req.body.uemail}", upassword = "${req.body.upassword}" WHERE uid = ${req.params.uid};`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// delete user data
app.delete("/testdata/:uid", (req, res) => {
  con.query(
    `DELETE FROM user_table WHERE uid = ${req.params.uid};`,
    (err, result) => {
      if (err) throw err;
      res.send("deleted");
    }
  );
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
