const express = require('express');
const { create, findAll, findById } = require('../controllers/blogPost');
const { validateJWT } = require('../auth/validateJWT');
const { validatePost, validateCategoryId } = require('../midlewares/blogPost');

const router = express.Router();

router.post('/', validateJWT, validatePost, validateCategoryId, create);
router.get('/', validateJWT, findAll);
router.get('/:id', validateJWT, findById);

module.exports = router;