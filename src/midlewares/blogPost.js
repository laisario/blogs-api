const categoryService = require('../services/Category');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const promises = categoryIds.map((id) => categoryService.findCategoryById(id));
  const response = await Promise.all(promises);
  if (!response) return res.status(400).json({ message: 'one or more "categoryIds" not found' });

  next();
};

module.exports = { validatePost, validateCategoryId };