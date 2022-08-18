const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Steph@99",
  database: "diary_entry",
});

app.post("/register", (req, res) => {
  const diary_users_username = req.body.diary_users_username;
  const diary_users_password = req.body.diary_users_password;

  db.query(
    "INSERT INTO diary_users (diary_users_username, diary_users_password) VALUES (?,?)",
    [diary_users_username, diary_users_password],
    (err, result) => {
      console.log(err);
      res.json({ result });
    }
  );

  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to MySQL Server!");
  });
});

app.listen(3001, () => {
  console.log("yay its working");
});
