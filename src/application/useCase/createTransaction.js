const { sequelize } = require('../../config/database');

class CreateTransactionUseCase {
  constructor(transactionRepository, accountRepository) {
    this.transactionRepository = transactionRepository;
    this.accountRepository = accountRepository;
  }

  async execute({ cuenta_origen, cuenta_destino, monto }) {
    const t = await sequelize.transaction();

    try {

      // Verificar si las cuentas existen
      const origen = await this.accountRepository.getById(cuenta_origen);
      const destino = await this.accountRepository.getById(cuenta_destino);

      if (!origen || !destino) {
        throw new Error('Una o ambas cuentas no existen');
      }

      // Verificar si hay saldo suficiente
      if (origen.saldo < monto) {
        throw new Error('Saldo insuficiente en la cuenta de origen');
      }

      // Actualizar saldos en ambas cuentas
      await this.accountRepository.updateSaldo(cuenta_origen, origen.saldo - monto, t);
      await this.accountRepository.updateSaldo(cuenta_destino, destino.saldo + monto, t);

      // Crear la transacción en la BD
      const transaction = await this.transactionRepository.create(
        { cuenta_origen, cuenta_destino, monto, estado: 'exitosa' },
        t
      );

      await t.commit();
      return transaction;
    } catch (error) {
      await t.rollback();
      throw new Error(error.message);
    }
  }
}

module.exports = CreateTransactionUseCase;