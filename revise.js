const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const mysql = ('mysql')
const app = express();
const port = 7000;

app.use(express.json());


const connection = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/mydb`, {});
    console.log('connected to the db');


  } catch (error) {
    console.log('not connected to the db')
  }
}
connection()

// const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database:'mysql'
// })

// db.connect((err) => {
//   if (err) {
//     console.log('db connected ')
//   } else {
//     console.log('db not connected');
// }
// })


const skey = "tejas";


const globaleMeddleware = (req, res, next) => {
  console.log(`the req method ${req.method} and req url ${req.url}`);

next()
}
app.use(globaleMeddleware);

// ✅ Middleware to Verify JWT Token
const middleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header
    if (!token) {
      return res
        .status(403)
        .json({ message: "Access denied. No token provided." });
    }

    const verifyToken = jwt.verify(token, skey);
    console.log("Verified Token:", verifyToken);

    req.user = verifyToken; // Attach decoded data to request
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

// ✅ Public Route (No JWT Required)
app.post("/post", (req, res) => {
  try {
    const { a, b } = req.body;
    let result = a + b;

    // ✅ Generate JWT Token
    const token = jwt.sign({ result }, skey, { expiresIn: "10m" });

    res.status(200).json({ message: "Addition successful", result, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong", error });
  }
});

// ✅ Protected Route (JWT Required)
app.get("/get", middleware, (req, res) => {
  res.status(200).json({ message: "Hello, secured route!", user: req.user });
});

app.post('/useradd', (req,res) => {
  const { name, age, address } = req.body
  const sql = 'INSERT INTO User(name,age,address) Values (?,?,?)'

  db.query(sql, [name, age, address], (err, result) => {
    if (err) {
    res.status(400).json({ message: "data not inserted " });

    } else {
    res.status(200).json({ message: "data inserted " ,result});

    }
  })
})

const newUser = new mongoose.Schema({
  name: String,
  email:String
})

const user = mongoose.model("user", newUser)

app.post('/user', async (req,res) => {

  try {
    const { name, email } = req.body;
    const NewUser = new user({ name, email });
    const data = await NewUser.save();

    res.status(200).send({ message: "data added", data });

 } catch (error) {
    console.log(error);
    res.status(400).send({message:"somthing went wrong"})
 }
})
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});


// closer

// function outer() {
// let data = "i am tejas"
//    function inner() {
//     console.log(data);

//   }
//   return inner
// }

// const myfunction = outer()
// myfunction()

// promise

// const promise = new Promise((resolve, reject) => {
//   let x = false;
//   if (x) {
//     resolve('i am succsessfully resolve')
//   } else {
//     reject(' i am reject')

//   }
// })


// promise
//   .then((data) => {
// console.log(data);

//   }).catch((error) => {
// console.log(error);

// })


// function sum(a, b, callback) {
//   let result = a + b
//   setTimeout(() => {
//       callback(result)
//   },2000)
// }


// function callback(result) {
// console.log('the sum of 2 number is : ',result);

// }

// sum(10,10,callback)


// const fetchdata = async () => {
//   try {

//     const promise = new Promise((resolve) => {

//       setTimeout(() => {
//         console.log('i am tejas ');
//         resolve()
//       },2000)
//     })
//     await promise
//     console.log(' i am lalit');


//     } catch (error) {
//       console.log(error);
//     }
// }

// fetchdata()


// rest

// function data(...a) {
//   console.log(a);

// }

// data(1,2,3,2,3,4)


// //spred

// const array1 = [1, 2, 3, 4]
// const array2 = [1, 2, 3, 4];
// const string = 'tejas'
// const datas = [...array1, ...array2,...string,4,5,6,7]
// console.log(datas);

//iife
// (function () {
//   console.log('hi...............');

// })
// ()


// var test;
// console.log(test);

// let x = null
// console.log(x);


// const array=[1,2,3,4]

// const data = array.map(num => num * 2)
// console.log(data);

//  array.forEach(num => console.log(num *2))


// HOC

// function sum(a,b,callback) {
//   let result = a + b
//    callback(result)
// }

// function callback(data) {
//   console.log("sum is :",data);

// }

// function multi(data) {
// console.log("multi:",data*2);

// }
// sum(10, 10, callback)
// sum(10, 10, multi);


// destuchure

// const [a, b] = [10, 10]
// console.log(a,b);
// const { name, age } = { name: "tejas", age: 22 }
// console.log(name,age);


// function sum(a) {
//   return function(b) {
//         return a + b;
//   }
// }

// console.log(sum(10)(10))


// const obj1 = {
//   name: 'tejas',
//   hello: () =>{
//     console.log('i am jayesh');

//   }
// }

// const obj2 = Object.create(obj1)

// obj2.name = 'ram'
// obj2.bolo =()=> {
// console.log('i love u');
// }
// obj2.bolo()
// obj2.hello()

// console.log(data);

// var data = 10

// hello()
// function hello() {
//   console.log('hii i am tejas ');

// }


// const hello = {
//   name: 'tej',
//   data:function() {
//       console.log(`my name is ${this.name}`)
//   }
// }

// hello.data()

// const array = ['tejas', 'lalit', 'ashraf', 'jayesh', 'kumar', 'suraj', 'niraj', 'deepak']

// let data = array.slice(1, 5)
// console.log(array.length);


// console.log(data);
// console.log(array);


// const person = { name: "tejas" }

// function hello(city) {
//   console.log(`hello my name is ${this.name} i am from ${city}`);

// }

// hello.call(person,'pune')
// hello.apply(person, ['mumbai'])

// const newFun = hello.bind(person, 'chopda')

// newFun()



// const array = [12, 3, 4, 5]

// const mapMethod = array.map(num => num * 2)
// console.log(mapMethod);

// const filterData = array.filter(num => num % 2==0)
// console.log(filterData);

// const reducesFun = array.reduce((acc, num) => acc + num,0)
// console.log(reducesFun);


// array.forEach(num=> console.log(num*2)
// )

// shallo copy
// const obj1 = {
//   name: "tejas",
//   detailes: {
//     age:20
//   }
// }

// const obj2 = { ...obj1 }

// obj2.detailes.age = 30

// console.log(obj2.detailes.age);
// console.log(obj1.detailes.age);

// const obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.detailes.age = 88

// console.log(obj2.detailes.age);
// console.log(obj1.detailes.age);


// setTimeout(() => {
//   console.log('hi i am settimeout function');
// },0)

// setInterval(() => {
// console.log('i am setInterval');

// },2000)


// process.nextTick(() => {
//   console.log("hello i am process nexttick");

// })


// setImmediate(() => {
//   console.log('i am setImidiate function');
// })
