const Transaction = require('../../domain/Transaction');


class CreateTransactionUseCase {
  constructor(transactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async execute(transactionData) {
    return await this.transactionRepository.create(transactionData);
  }
}

module.exports = CreateTransactionUseCase;


 