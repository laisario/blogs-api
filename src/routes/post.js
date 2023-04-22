const express = require('express');
const { create } = require('../controllers/blogPost');
const { validateJWT } = require('../auth/validateJWT');
const validatePost = require('../midlewares/blogPost');

const router = express.Router();

router.post('/', validateJWT, validatePost, create);

module.exports = router;