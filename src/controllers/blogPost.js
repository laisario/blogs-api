const postService = require('../services/BlogPost');


const create = async (req, res) => {
  const published = new Date();
  const updated = new Date();

  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  console.log('post', categoryIds)
  

  const post = await postService.create({ title, content, userId: id, published, updated });

  await createPostCategory(post.id, categoryIds)

  return res.status(201).json(post)
};

const createPostCategory = async (postId, categoryIds) => {
  const promises = categoryIds.map((id) => postService.createPostCategory({postId, categoryId: id}));
  await Promise.all(promises);
};

module.exports = { create };