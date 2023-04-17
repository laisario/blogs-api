const { Category } = require('../models');

const findCategoryById = async (id) => Category.findOne({ where: { id } });


const createCategory = async (newCategory) => Category.create(newCategory);


const getAllCategories = async () => Category.findAll();



module.exports = { createCategory, findCategoryById, getAllCategories };