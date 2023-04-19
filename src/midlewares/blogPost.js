const categoryService = require('../services/Category');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ "message": "Some required fields are missing" });
  }
  for (id of categoryIds) {
    const response = await categoryService.findCategoryById(id);
    if (!response) return res.status(400).json({ "message": "one or more \"categoryIds\" not found" });
  }
  next();
};

module.exports = validatePost;