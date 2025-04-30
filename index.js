// import express from 'express'
// import jwt from 'jsonwebtoken'
// const app = express ()
// const port = 3000


// app.use(express.json())
// const obj = {
//   name:'tejas'
// }
// let skey = 'tejas@1323'
// let token;

// const middelware = (req, res, next) => {
//   console.log(`the req url is ${req.url} and method is ${req.method}`);
//   next();
// };


// app.use(middelware);
// app.get('/get', (req, res) => {
//    try {
//     token = jwt.sign(obj, skey, { expiresIn: "10s" });
//     console.log(token);
//     res.status(200).send({ message: "services is working" });
//    } catch (error) {
//     console.log(error);

//    }
// })



// app.get("/post", (req, res) => {
//   try {
//     let verifys = jwt.verify(token, skey);
//     console.log(verifys);
//     res.status(200).send({ message: "post services is working" });
//   } catch (error) {
//     console.log("the error isssssssssss",error);

//   }
// });


// app.post("/sum", (req, res) => {
//   try {
//     const { a, b } = req.body
//     const result = a + b
//     res.json({message:"the sum of 2 numbesr is :" ,result})

//   } catch (error) {
//       console.log("error",error)
//   }

// })


// app.listen(port, () => {
//   console.log(`application running on ${port}`);
// });





// str='sahghasgdxxjashjahsxxweuyruweyxxjxbmnxxhfjhjsdf'
// output = "sahghasgdyyjashjahsyyweuyruweyyyjxbmnxxhfjhjsdf";





