const express = require('express');
const TransactionController = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/', TransactionController.createTransaction);
router.get('/:id', TransactionController.getTransactionById);
router.get('/', TransactionController.listTransactions);
router.patch('/:id', TransactionController.updateTransactionStatus);


module.exports = router;