const Account = require('../../domain/account');

class AccountRepositoryPostgres {
  async create(accountData) {
    // Crear una nueva cuenta
    return await Account.create(accountData);
  }

  async getById(accountId) {
    // Obtener una cuenta por su ID
    return await Account.findByPk(accountId);
  }

  async getByNumber(accountNumber) {
    // Obtener una cuenta por su número de cuenta
    return await Account.findOne({ where: { numero_cuenta: accountNumber } });
  }

  async updateSaldo(accountId, saldo) {
    // Actualizar saldo de la cuenta
    return await Account.update({ saldo }, { where: { id: accountId } });
  }
}

module.exports = new AccountRepositoryPostgres();