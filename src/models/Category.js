const UserModel = (sequelize, DataTypes) => {
      const User = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        name: DataTypes.STRING,
      },
        {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
      });
    
      return User;
    };
    
    module.exports = UserModel;