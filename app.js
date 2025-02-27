const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const mysql = require("mysql")
const mongoose =  require("mongoose")
const port = 4000;


app.use(express.json());
let skey = "tejas@1323"
let token;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/mydb`,{});
    console.log("database is connected ");
} catch (error) {
  console.log(error)
}
}

connectDB();

// const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database:"mysql"

// })

// db.connect((err) => {
//   if (err) {
//     console.log("database are not connected");

//   } else {
//     console.log("database are connected !!!!");

//   }
// })





const middleware = (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .send({ message: "Empty request body is not allowed" });
    } else {
        console.log(`Request Method: ${req.method}, URL: ${req.url}`);
        next();
    }

  } catch (error) {
    console.error("Middleware Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

app.use(middleware);

app.get("/", (req, res) => {
  res.send({ message: "hello i am working now" ,token});
});


app.post("/sum",(req, res) => {
  const { a, b } = req.body;
   token = jwt.sign(req.body, skey, { expiresIn: '10s' })
    const verifyToken = jwt.verify(token, skey);
    console.log("verifyToken is", verifyToken);
  let result = a + b;
  res.send({ message: "sum of two no is", result ,token});
});


// using mysql//........................inser the user data with using query...................................
app.post('/addUser', (req,res) => {
  const { name, age, number } = req.body;
  const sql = "INSERT INTO User (name,age,number) VALUES (?,?,?)";
  db.query(sql, [name, age, number], (err, result) => {
    if (err) {
      res.status(400).send({message:"Failed to insert the Data"})
    } else {
      res.status(200).send({message:"user added successfully",data: result})
    }
  })
})

// using mongodb//........................inser the data in a mongodb.....................................

//...............................................

// Define User Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
});

const User = mongoose.model("User", userSchema);

//...............................................
app.post('/addData', async (req, res) => {
  try {
    const { name, email, number } = req.body;
    const newUser = new User({ name, email, number });  // add the data
    const result = await newUser.save();

    // const findData = await User.findOne({name:"tejas"})   // find the data on name
    // console.log("findData", findData);

    // const findData = await User.find()   // find the data
    // console.log("findData", findData);

    res.status(200).send({ message: "data insert", result });
  } catch (error) {
        res.status(400).send({ message: "data not insert", error });

  }
})



app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
