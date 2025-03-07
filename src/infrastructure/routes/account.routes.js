const express = require('express');
const AccountController = require('../controllers/account.controller');

const router = express.Router();

router.post('/', AccountController.create);
router.get('/:id', AccountController.getById);
router.post('/:id/deposit', AccountController.deposit);

module.exports = router;