const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

const middelWare = (req, res, next) => {
 try {

    let data = `${req.method} + ${req.url}`;
    console.log("req method is : ", data);
    next();
 } catch (error) {
   console.log(error);
 }
};

app.use(middelWare);

app.get('/', (req,res) => {
  res.send({message:"hello i am working now"})
})

app.post('/sum', (req, res) => {
  const { a, b } = req.body
  let result = a + b;
  res.send({message:"sum of two no is",result})
})




app.listen(port,() => {
  console.log(`server is running on ${port}`);

})
