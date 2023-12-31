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
  const posts = await postService.findAll();
  
  return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.findById(id);
  return res.status(200).json(post);
}; 

const updatedPost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  
  const post = await postService.findById(id);
  post.set({
    title,
    content,
    updated: new Date(),
  });
  await post.save();
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const test = await postService.deletePost(id);
  console.log('aaaaa', test);
  return res.status(204).end();
};

module.exports = { create, findAll, findById, updatedPost, deletePost };