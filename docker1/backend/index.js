'use strict';

const express = require('express');
const PORT = 40000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello buddy, im running in the port: ' + PORT);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);