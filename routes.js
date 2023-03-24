//línea de código que se utiliza en Node.js para cargar el módulo express//
const express = require('express');

const router = express.Router();

const findOne = require('./userService');

router.get('/', (req, res) => {
  res.send('Homesadsda');
});

router.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.send(`Hola ${nombre}`);
});

router.get('/:guid', (req, res) => {
  res.json(findOne(req.params.guid));
});
module.exports = router;
