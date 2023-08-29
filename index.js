const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World ta ok!");
});

app.use("/users", usersRouter);

console.log(`worker pid=${process.pid}`);

app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
