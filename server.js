const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

//setting up routes

app.use(express.json());
const users = [];
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  //create a salt

  try {
    const salt = await bcrypt.genSalt(); //salt is different to keep the hashes of same passwords different
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);

    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send(); //send a blank response
  } catch {
    res.status(500).send();
  }
});
app.listen(3000);
