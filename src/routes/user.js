const express = require('express');
const userController = require('../controllers/user');
const {validateDisplayName, validateEmail, validatePassword } = require('../midlewares/user');


const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.create);


module.exports = router;