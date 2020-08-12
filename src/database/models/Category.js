module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(60),
            allowNull: false
          }
        };
        let config = {
          tableName: 'categories',
          timestamps: false
        };
    const Category = sequelize.define(alias, cols, config);  
    
    return Category;
  }