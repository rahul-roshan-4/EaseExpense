const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./Upload");
const Friend2 = require("./Friend");
const bcrypt = require("bcrypt"); // Add this line
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const salt = bcrypt.genSaltSync(10);
const secret = "asdfe45we45w345wegw345werjktjwertkj";
mongoose.connect(
  "mongodb+srv://rahulroshan6298:QSbA7papmnxrEiNm@cluster0.tcl9heg.mongodb.net/?retryWrites=true&w=majority"
);
const uri =
  "mongodb+srv://rahulroshan6298:QSbA7papmnxrEiNm@cluster0.tcl9heg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.post("/register", async (req, res) => {
  const { name, password, mail } = req.body;
  // var name=req.body.userName;
  // console.log(req.body);
  try {
    const userDoc = await User.create({
      name,
      password: bcrypt.hashSync(password, salt),
      mail,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  const userDoc = await User.findOne({ mail });
  // console.log(req.body);
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    console.log(req.body);
    if (passOk) {
      // Authentication successful
      jwt.sign({ mail, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) {
          // Handle JWT signing error
          console.error(err);
          res.status(500).json("Internal server error");
        } else {
          res.cookie("token", token).json({
            id: userDoc._id,
            mail,
          });
        }
      });
    } else {
      // Password is incorrect
      res.status(400).json("Wrong password");
    }
  } else {
    // User not found
    res.status(400).json("User not found");
  }
});
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    console.log(info);
    res.json(info);
  });
});
app.post("/friend", async (req, res) => {
  const { mail2, mail, owe } = req.body;
  // var temp = owe;

  // try {
  //   const data = await Friend2.find({ mail: mail });

  //   if (data.length > 0) {
  //     console.log(mail); 
  //     console.log(data[0].owe);
  //     temp = parseInt(data[0].owe) + parseInt(temp);
  //     console.log(temp);
  //     await Friend2.deleteOne({ mail: mail });
  //   }

    const userDoc2 = await Friend2.create({
      mail2,
      mail,
      owe // Use the updated owe value
    });

    res.json(userDoc2);
  // } catch (e) {
  //   console.log(e);
  //   res.status(400).json(e);
  // }
});

app.post("/findfriend", async (req, res) => {
  const { mail2 } = req.body;
  const mail = mail2;

  try {
    Friend2.find({ mail: mail }).then((data) => {
      if (data.length > 0) res.json(data);
      else {
        res.send("no data");
      }
    });
  } catch (e) {
    console.log("hello");
    res.send("no problem");
  }
});
app.post("/history", async (req, res) => {
  const { mail2 } = req.body;

  Friend2.find({ mail2: mail2 }).then((data) => {
    if (data.length > 0) res.json(data);
    else {
      res.send("no history");
    }
  });
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
  