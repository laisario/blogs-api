const express = require('express');
const { create, findAll, findById, updatedPost } = require('../controllers/blogPost');
const { validateJWT } = require('../auth/validateJWT');
const { 
  validatePost,
  validateCategoryId, 
  validateOwner, 
  validatePostExist,
  validatePostUpdate,
  } = require('../midlewares/blogPost');

const router = express.Router();

router.post('/', validateJWT, validatePost, validateCategoryId, create);
router.get('/', validateJWT, findAll);
router.get('/:id', validateJWT, validatePostExist, findById);
router.put('/:id', validateJWT, validateOwner, validatePostExist, validatePostUpdate, updatedPost);

module.exports = router;