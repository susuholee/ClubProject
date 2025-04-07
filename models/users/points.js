
const {DataTypes, Model} = require('sequelize');


class Point extends Model {
    static init(sequelize) {
        return super.init({
            user_id: {type: DataTypes.STRING(20),allowNull: false,primaryKey: true},
            point : {type : DataTypes.INTEGER, allowNull : false ,defaultValue: 0 },

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Point',
            tableName : 'points',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Point.belongsTo(models.User, {foreignKey : 'user_id', targetKey : 'uid', onDelete : 'CASCADE'})
    }
}



module.exports = Point;
