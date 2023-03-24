const express = require('express');
const app = express();

const router = require('./routes');

const PORT = 3000;
const URL_BASE = 'localhost';

app.listen(PORT, () => {
  console.log(`Server listening in http://${URL_BASE}:${PORT}/`);
});

app.get('/', (req, res) => {
  res.send('Home');
});

app.use('/api', router);
