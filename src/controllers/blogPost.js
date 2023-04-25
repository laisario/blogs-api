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

const findAll = async (req, res) => {
  const { id } = req.user;

  const posts = await postService.findAll(id);
  
  return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.findById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
}; 

module.exports = { create, findAll, findById };