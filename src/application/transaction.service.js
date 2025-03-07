const Transaction = require('../domain/Transaction');


  async function createTransaction(transactionData) {
    try {
      if (!transactionData.cuenta_origen || !transactionData.cuenta_destino || !transactionData.monto) {
        throw new Error('Los campos cuenta_origen, cuenta_destino y monto son obligatorios.');
      }
  
      if (transactionData.monto <= 0) {
        throw new Error('El monto debe ser mayor a cero.');
      }
  
      const transaction = await Transaction.create(transactionData);
      return transaction;
    } catch (error) {
      throw new Error(`Error al crear la transacción: ${error.message}`);
    }
  }


  async function findAllTransactions() {
    try {
      return await Transaction.findAll();
    } catch (error) {
      throw new Error(`Error al obtener las transacciones: ${error.message}`);
    }
  }


  async function findTransactionById(id) {
    return await Transaction.findByPk(id);
  }

  async function updateTransaction(id, updateData) {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return null;
    return await transaction.update(updateData);
  }

  async function deleteTransaction(id) {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return null;
    await transaction.destroy();
    return true;
  }
  

module.exports = { createTransaction, findAllTransactions,findTransactionById,updateTransaction,deleteTransaction };