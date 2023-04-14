const express = require('express');
const loginController = require('../controllers/login');
const loginValidation = require('../midlewares/login')

const router = express.Router();

router.post('/', loginValidation, loginController.login());


module.exports = router;