const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};
const allCategoryExists = async (categoryId) => {
  const categories = await Category.findAll({
    where: {
      id: categoryId,
    },
  });
  if (categories.length !== categoryId.length) return true;
  return false;
};

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  getAll,
  createCategory,
  allCategoryExists,

};