const CreateAccountUseCase = require('../../application/useCase/createAccount')
const GetAccountByIdUseCase = require('../../application/useCase/getAccount');
const DepositUseCase = require('../../application/useCase/DepositUseCase');

class AccountController {
    async create(req, res) {
        try {
          const { numero_cuenta, titular, saldo } = req.body;
          const account = await CreateAccountUseCase.execute({ numero_cuenta, titular, saldo });
          res.status(201).json(account);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }

  async getById(req, res) {
    try {
      const account = await GetAccountByIdUseCase.execute(req.params.id);
      res.json(account);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deposit(req, res) {
    try {
      const response = await DepositUseCase.execute(req.params.id, req.body.amount);
      res.json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AccountController();