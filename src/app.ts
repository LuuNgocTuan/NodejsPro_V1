import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8079;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("env port: ", process.env.PORT);
});
