
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('posts_categories', {
        categoryId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'category_id',
          references: {
            model: 'categories',
            key: 'id',
          }
        },
        postId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'post_id',
          references: {
            model: 'blog_posts',
            key: 'id',
          }
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('posts_categories');
  }
};
