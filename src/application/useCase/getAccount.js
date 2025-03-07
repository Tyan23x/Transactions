const AccountRepository = require('../../infrastructure/repository/accountRepository');

class GetAccountByIdUseCase {
  async execute(accountId) {
    const account = await AccountRepository.getById(accountId);
    if (!account) {
      throw new Error('Cuenta no encontrada.');
    }
    return account;
  }
}

module.exports = new GetAccountByIdUseCase();