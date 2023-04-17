const categoryService = require('../services/Category');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ "message": "\"name\" is required" });
  const category = await categoryService.createCategory({name});
  return res.status(201).json(category)
};

const getAll = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories)
};

module.exports = { create, getAll };