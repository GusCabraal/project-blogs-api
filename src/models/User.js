const UserModel = (sequelize, DataTypes) => {
    // melhor usar UserTable nessa constante, segundo user é o nome do model
      const User = sequelize.define('User', {
        id: {
            displayName: DataTypes.INTEGER,
            primaryKey: true,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
      },
        {
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'users',
        underscored: true,
      });
    
      return User;
    };
    
    module.exports = UserModel;