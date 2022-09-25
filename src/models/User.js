const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image:{
        type: DataTypes.STRING,
        allowNull: true,
      } ,
    },
    {
      timestamps: false,
      tableName: "users",
      underscored: true,
    }
  );

  return User;
};

module.exports = UserModel;
