const express = require('express');
const { create } = require('../controllers/blogPost');
const { validateJWT } = require('../auth/validateJWT');
const { validatePost, validateCategoryId } = require('../midlewares/blogPost');

const router = express.Router();

router.post('/', validateJWT, validatePost, validateCategoryId, create);

module.exports = router;