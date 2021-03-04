const express = require("express");
const bodyParser = require("body-parser");
const e = require("express");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 3000;
var fs = require("fs");
app.use(express.static("public"));

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/getusers", (req, res) => {
  let out = "<h2> USERS:</h2> "
  var array = fs.readFileSync(__dirname + "/public/data.log").toString().split("\n");
for(i in array) {
    var user = array[i].split("#");
    out+= user[1] + "<br>";
}
  res.send(out);
});


app.post("/register", urlencodedParser, (req, res) => {
  console.log(req.body);
  let errors = {};
  if (req.body.name === "") {
    errors["name_error"] = "*Name is required";
  }
  if (req.body.email === "") {
    errors["email_error"] = "*Email is required";
  }
  if (req.body.pass === "") {
    errors["pass_error"] = "*Password is required";
  }
  if (Object.keys(errors).length === 0) {
    fs.appendFile(__dirname + "/public/data.log", "\n" + (req.socket.remoteAddress) + "#" + req.body.name + "#" + req.body.email + "#" + req.body.pass, (err) => {
      if (err) throw err;
      console.log("Data has been added!");
    });
    res.status(200).json(req.body);
  } else {
    res.status(200).json(errors);
  }

});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
