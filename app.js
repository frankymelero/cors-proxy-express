const express = require('express');
const request = require('request');
const app = express();
const PORT = 3001;
  
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  
  app.get('/', (req, res) => {
    const des = req.query['des'];
    const url = `https://ssd-api.jpl.nasa.gov/sentry.api?des=${des}`;
  
    request(url).pipe(res);
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  });