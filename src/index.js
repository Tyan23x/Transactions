const express = require('express');
const sequelize = require('./config/database');
const transactionRouter = require('./infrastructure/controllers/transaction.controller');

const app = express();
app.use(express.json());
app.use('/transacciones', transactionRouter);

sequelize.sync({ force: true }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(4000, () => console.log('Microservicio de Transacciones corriendo en http://localhost:4000'));
}).catch((err) => {
  console.error('Error al sincronizar la base de datos:', err);
});