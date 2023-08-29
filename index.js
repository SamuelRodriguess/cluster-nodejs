const express = require("express");
const app = express();
const port = process.env.WORKER_PORT || 3000;

console.log(`Worker pid=${process.pid}`);

app.get("/", (req, res) => {
  res.send(`Response from worker pid=${process.pid}`);
});

app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`Worker pid=${process.pid} is listening on port ${port}`);
});