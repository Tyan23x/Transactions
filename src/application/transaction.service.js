const Transaction = require('../domain/Transaction');

async function createTransaction(transactionData) {
  return await Transaction.create(transactionData);
}

async function findAllTransactions() {
  return await Transaction.findAll();
}

module.exports = { createTransaction, findAllTransactions };