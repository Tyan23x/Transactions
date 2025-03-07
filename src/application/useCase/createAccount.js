const AccountRepositoryPostgres = require('../../infrastructure/repository/accountRepository');

class CreateAccountUseCase {
  async execute({ numero_cuenta, titular, saldo }) {
    // Validación simple
    if (!numero_cuenta || !titular || saldo === undefined) {
      throw new Error("Faltan datos para crear la cuenta.");
    }

    const newAccount = await AccountRepositoryPostgres.create({
      numero_cuenta,
      titular,
      saldo,
    });

    return newAccount;
  }
}

module.exports = new CreateAccountUseCase();