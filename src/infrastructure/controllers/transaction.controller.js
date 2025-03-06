const express = require('express');
const router = express.Router();
const { createTransaction, findAllTransactions } = require('../../application/transaction.service');

router.post('/', async (req, res) => {
  try {
    const transaction = await createTransaction(req.body);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la transacción', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const transactions = await findAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las transacciones', error });
  }
});

module.exports = router;