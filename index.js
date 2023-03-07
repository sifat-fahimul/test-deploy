import express from "express";

const PORT = 9000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/hello", (req, res) => {
  res.send("hello world! ............");
});

app.listen(PORT, () => {
  console.log("connected to server..." + PORT);
});
