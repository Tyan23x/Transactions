class ListTransactionsUseCase {
    constructor(transactionRepository) {
      this.transactionRepository = transactionRepository;
    }
  
    async execute() {
      return await this.transactionRepository.findAll();
    }
  }
  
  module.exports = ListTransactionsUseCase;
  