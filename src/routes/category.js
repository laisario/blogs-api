const express = require('express');
const categoryController = require('../controllers/category');
const { validateJWT } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryController.create);
router.get('/', validateJWT, categoryController.getAll);

module.exports = router;