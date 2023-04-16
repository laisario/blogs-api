const express = require('express');
const userController = require('../controllers/user');
const { validateDisplayName, validateEmail, validatePassword } = require('../midlewares/user');
const { validateJWT } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.create);
router.get('/', validateJWT, userController.getAll);
router.get('/:id', validateJWT, userController.getByUserId);


module.exports = router;