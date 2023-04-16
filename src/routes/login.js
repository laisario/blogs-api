const express = require('express');
const loginController = require('../controllers/login');
const { loginValidationFields, loginValidationPassword } = require('../midlewares/login');

const router = express.Router();

router.post('/', loginValidationFields, loginValidationPassword, loginController.login);

module.exports = router;