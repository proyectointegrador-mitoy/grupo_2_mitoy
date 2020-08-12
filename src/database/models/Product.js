module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          material_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: false
          },
          color_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: false
          },
          category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: false
          },
          age: {
            type: dataTypes.INTEGER(3).UNSIGNED,
            allowNull: false
          },
          discount: {
            type: dataTypes.DECIMAL(15,2),
            allowNull: true
          },
          price: {
            type: dataTypes.DECIMAL(25,4),
            allowNull: false
          },
          image: {
            type: dataTypes.STRING(55),
            allowNull: true
          },
          stock: {
            type: dataTypes.INTEGER(3).UNSIGNED,
            allowNull: false
          },
          description: {
            type: dataTypes.STRING(255),
            allowNull: false
          }
        };
        let config = {
          tableName: 'products',
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          underscored: false
        };
    const Product = sequelize.define(alias, cols, config);  
    
    return Product;
  }