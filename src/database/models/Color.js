module.exports = (sequelize, dataTypes) => {
    const alias = 'Color';
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
          code: {
            type: dataTypes.STRING(20),
            allowNull: false
          }  
        };
        let config = {
          tableName: 'colors',
          timestamps: false          
        };
    const Color = sequelize.define(alias, cols, config);  
    
    return Color;
  }