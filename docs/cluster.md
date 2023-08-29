# Cluster no Node.js

  *O módulo de cluster no Node.js permite a criação de várias cópias do mesmo programa para aproveitar eficientemente os múltiplos núcleos de CPU em um computador, melhorando o desempenho e a capacidade de resposta.*

  - https://ibb.co/4WGryFV

```
  [nodemon] starting `node index.js`
  Worker pid=26082
  Worker pid=26082 is listening on port 3000
```
``` 
  ➜  workspace git:(draft/delicate-wave) ✗ WORKER_PORT=3001 node clusterLogic.js

  Primary pid=27298
  The total number of CPUs is 2
  Worker pid=27305
  Worker pid=27305 is listening on port 3001
  Worker pid=27306
  Worker pid=27306 is listening on port 3001

```
