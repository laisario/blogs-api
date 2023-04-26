const categoryService = require('../services/Category');
const blogPostService = require('../services/BlogPost');

const validatePostUpdate = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await Promise.all(categoryIds.map(categoryService.findCategoryById));
  if (categories.some((category) => !category)) {
    return res
      .status(400)
      .json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

const validateOwner = async (req, res, next) => {
  const { id: userId } = req.user;
  const { id: postId } = req.params;
  const promises = await blogPostService.findByUserId(userId, postId);
  const posts = await Promise.all(promises);
  if (!posts.length) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

const validatePostExist = async (req, res, next) => {
  const { id } = req.params;
  const post = await blogPostService.findById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  next();
};

module.exports = { 
  validatePost,
  validateCategoryId, 
  validateOwner, 
  validatePostExist, 
  validatePostUpdate };