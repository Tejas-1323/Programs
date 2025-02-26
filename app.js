const express = require('express')
const app = express()
const port = 4000


app.get('/', (req,res) => {
  res.send({message:"hello i am working now"})
})
app.listen(port,() => {
  console.log(`server is running on ${port}`);

})
