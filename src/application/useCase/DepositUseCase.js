const AccountRepository = require('../../infrastructure/repository/accountRepository');
const GetAccountByIdUseCase = require('./getAccount');

class DepositUseCase {
  async execute(accountId, amount) {
    const account = await GetAccountByIdUseCase.execute(accountId);
    const nuevoSaldo = account.saldo + amount;

    await AccountRepository.updateSaldo(accountId, nuevoSaldo);
    return { message: 'Depósito realizado con éxito', nuevoSaldo };
  }
}

module.exports = new DepositUseCase();