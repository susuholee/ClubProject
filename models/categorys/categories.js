const {DataTypes, Model} = require('sequelize');


class Category extends Model {
    static init(sequelize) {
        return super.init({
            id : {type : DataTypes.INTEGER, primaryKey : true, allowNull : false, autoIncrement : true},
            depth : {type : DataTypes.INTEGER, allowNull : false, defaultValue : 1},
            name : {type : DataTypes.STRING(20), unique : true},
            parent_id : {type : DataTypes.INTEGER, allowNull: true, defaultValue: null}

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Category',
            tableName : 'categories',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Category.hasMany(models.Club, {foreignKey : 'category_id', target : 'id'})
        models.Category.hasMany(models.Category, {foreignKey : 'parent_id', as: 'subCategories'})
    }
}



module.exports = Category;
