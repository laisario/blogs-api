const postService = require('../services/BlogPost');

const create = async (req, res) => {
  const published = new Date();
  const updated = new Date();

  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await postService
    .create({ title, content, userId: id, published, updated }, categoryIds);

  return res.status(201).json(post);
};

module.exports = { create };