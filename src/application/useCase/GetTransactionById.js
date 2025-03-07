class GetTransactionByIdUseCase {
    constructor(transactionRepository) {
      this.transactionRepository = transactionRepository;
    }
  
    async execute(id) {
      return await this.transactionRepository.findById(id);
    }
  }
  
  module.exports = GetTransactionByIdUseCase;