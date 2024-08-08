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

app.post("/users/login", async (req, res) => {
  //check if the user exists ?

  const user = users.find((user) => (user.name = req.body.name));

  if (user == null) {
    return res.status(400).send(" cannot find user ");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("NO nono nonono ");
    }
  } catch {
    return res.status(500).send();
  }
});
app.listen(3000);
