const BlogPostsModel = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      "BlogPost",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated:{
          type: DataTypes.STRING,
        },
        userId:{
          type: DataTypes.INTEGER,
        },
      },
      {
        timestamps: false,
        tableName: "blog_posts",
        underscored: true,
      }
    );

    BlogPosts.associate = (models) => {
        BlogPosts.belongsTo(models.User,
          { foreignKey: 'userId', as: 'user' });
      };
  
    return BlogPosts;
  };
  
  module.exports = BlogPostsModel;
  