const BlogPostsModel = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define(
      "BlogPost",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING,
        },
        published: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated:{
          type: DataTypes.DATE,
          allowNull: false,
        },
        userId:{
          type: DataTypes.INTEGER,
          allowNull: false,
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
  