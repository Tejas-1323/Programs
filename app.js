const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

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
  res.send({ message: "hello i am working now" });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  let result = a + b;
  res.send({ message: "sum of two no is", result });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
