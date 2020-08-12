module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(60),
            allowNull: true
          },
          email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
          },
          password: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          dni: {
            type: dataTypes.INTEGER(8).UNSIGNED,
            allowNull: true
          },
          phone: {
            type: dataTypes.STRING(45),
            allowNull: true
          },
          street: {
            type: dataTypes.STRING(255),
            allowNull: true
          },
          gender: {
            type: dataTypes.STRING(20),
            allowNull: true
          },
          avatar: {
            type: dataTypes.STRING(55),
            allowNull: true
          },
          group_id: {
            type: dataTypes.INTEGER(1).UNSIGNED,
            allowNull: false
          },
          active: {
            type: dataTypes.INTEGER(1).UNSIGNED,
            allowNull: false
          },
          remember_token: {
            type: dataTypes.STRING(45),
            allowNull: true
          }
    };
    let config = {
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscored: false
    };
    const User = sequelize.define(alias, cols, config);  
    
    return User;
  }