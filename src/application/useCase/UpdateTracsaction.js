class UpdateTransactionStatusUseCase {
    constructor(transactionRepository) {
      this.transactionRepository = transactionRepository;
    }
  
    async execute(id, estado) {
      return await this.transactionRepository.updateStatus(id, estado);
    }
  }
  
  module.exports = UpdateTransactionStatusUseCase;