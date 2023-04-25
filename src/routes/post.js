const express = require('express');
const { create, findAll } = require('../controllers/blogPost');
const { validateJWT } = require('../auth/validateJWT');
const { validatePost, validateCategoryId } = require('../midlewares/blogPost');

const router = express.Router();

router.post('/', validateJWT, validatePost, validateCategoryId, create);
router.get('/', validateJWT, findAll);

module.exports = router;