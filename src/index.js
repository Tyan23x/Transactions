const express = require('express');
const sequelize = require('../src/config/database');
const transactionRouter = require('./infrastructure/routes/transaction.routes');
const accountRouter = require('./infrastructure/routes/account.routes');

const app = express();
app.use(express.json());

app.use('/cuentas', accountRouter);
app.use('/transacciones', transactionRouter);

sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(4000, () => console.log('Servidor corriendo en http://localhost:4000'));
}).catch((err) => {
  console.error('Error al sincronizar la base de datos:', err);
});