const Transaction = require('../../domain/Transaction');

class TransactionRepository {
  async create(transactionData) {
    return await Transaction.create(transactionData);
  }

  async findById(id) {
    return await Transaction.findByPk(id);
  }

  async findAll() {
    return await Transaction.findAll();
  }

  async updateStatus(id, estado) {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return null;
    transaction.estado = estado;
    await transaction.save();
    return transaction;
  }

  async delete(id) {
    return await Transaction.destroy({ where: { id } });
  }
}

module.exports = TransactionRepository;