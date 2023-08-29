const express = require("express");
const cluster = require("cluster");
const os = require("os");
const path = require("path");

const app = express();
const port = process.env.WORKER_PORT || 3001; // Usar variável de ambiente para definir a porta

console.log(`Primary pid=${process.pid}`);

if (cluster.isPrimary) {
  setupCluster();
} else {
  startServer();
}

function setupCluster() {
  const cpuCount = os.cpus().length;

  console.log(`The total number of CPUs is ${cpuCount}`);

  cluster.setupPrimary({
    exec: path.join(__dirname, "index.js"), // Caminho para o arquivo de worker
  });

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} has been killed`);
    console.log("Starting another worker");
    cluster.fork();
  });
}

function startServer() {
  app.get("/", (req, res) => {
    res.send("Hello World ta ok!");
  });

  app.listen(port, () => {
    console.log(`Worker pid=${process.pid} is listening on port ${port}`);
  });
}
