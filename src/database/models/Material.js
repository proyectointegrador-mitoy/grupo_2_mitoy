module.exports = (sequelize, dataTypes) => {
    const alias = 'Material';
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
          tableName: 'materials',
          timestamps: false          
        };
    const Material = sequelize.define(alias, cols, config);  
    
    return Material;
  }