const TransactionRepository = require('../repository/transactionRepository');
const CreateTransactionUseCase = require('../../application/useCase/createTransaction');
const GetTransactionByIdUseCase = require('../../application/useCase/GetTransactionById');
const ListTransactionsUseCase = require('../../application/useCase/ListTransactions');
const UpdateTransactionStatusUseCase = require('../../application/useCase/UpdateTracsaction');


const transactionRepository = new TransactionRepository();
const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);
const getTransactionByIdUseCase = new GetTransactionByIdUseCase(transactionRepository);
const listTransactionsUseCase = new ListTransactionsUseCase(transactionRepository);
const updateTransactionStatusUseCase = new UpdateTransactionStatusUseCase(transactionRepository);

class TransactionController {
  static async createTransaction(req, res) {
    try {
      const transaction = await createTransactionUseCase.execute(req.body);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTransactionById(req, res) {
    try {
      const transaction = await getTransactionByIdUseCase.execute(req.params.id);
      if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
      res.json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listTransactions(req, res) {
    try {
      const transactions = await listTransactionsUseCase.execute();
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTransactionStatus(req, res) {
    try {
      const { estado } = req.body;
      const updatedTransaction = await updateTransactionStatusUseCase.execute(req.params.id, estado);
      if (!updatedTransaction) return res.status(404).json({ message: 'Transaction not found' });
      res.json(updatedTransaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = TransactionController;