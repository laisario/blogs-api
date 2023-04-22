const postService = require('../services/BlogPost');

const createPostCategory = async (postId, categoryIds) => {
  const promises = categoryIds;
  ''.map((id) => postService.createPostCategory({ postId, categoryId: id }));
  await Promise.all(promises);
};

const create = async (req, res) => {
  const published = new Date();
  const updated = new Date();

  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await postService.create({ title, content, userId: id, published, updated });

  await createPostCategory(post.id, categoryIds);

  return res.status(201).json(post);
};

module.exports = { create };