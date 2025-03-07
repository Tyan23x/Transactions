const express = require('express');
const router = express.Router();
const { createTransaction, findAllTransactions,findTransactionById,updateTransaction,deleteTransaction} = require('../../application/transaction.service');

router.post('/', async (req, res) => {
  try {
    const transaction = await createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const transactions = await findAllTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las transacciones' });
  }
});

// Obtener una transacción por ID
router.get('/:id', async (req, res) => {
  try {
    const transaction = await findTransactionById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la transacción', error });
  }
});

// Actualizar una transacción
router.put('/:id', async (req, res) => {
  try {
    const transaction = await updateTransaction(req.params.id, req.body);
    if (!transaction) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la transacción', error });
  }
});


// Eliminar una transacción
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await deleteTransaction(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Transacción no encontrada' });
    }
    res.json({ message: 'Transacción eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la transacción', error });
  }
});



module.exports = router;