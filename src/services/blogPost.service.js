const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      // { model: PostCategory, as: 'categories' },
    ],
  });

  return blogPost;
};

const insert = async ({ userId, title, content, published, updated, categoryIds }) => {
  const result = await sequelize.transaction(
    async (t = sequelize.transaction()) => {
      const blogPost = await BlogPost.create(
        { title, content, userId, published, updated },
        { transaction: t },
      );

      const categoriesInserts = categoryIds.map(async (category) => {
        await PostCategory.create(
          { categoryId: Number(category), postId: blogPost.id },
          { transaction: t },
        );
      });
      await Promise.all(categoriesInserts);
      return blogPost;
    },
  );
  return result;
};

module.exports = {
  insert,
  getAll,
};
