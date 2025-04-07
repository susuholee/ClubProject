
const {DataTypes, Model} = require('sequelize');


class Userintrest extends Model {
    static init(sequelize) {
        return super.init({
            user_id: {type: DataTypes.STRING(20),allowNull: false,primaryKey: true},
            category_id : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'UserInterest',
            tableName : 'user_interests',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.UserInterest.belongsTo(models.User, {foreignKey : 'user_id', targetKey : 'uid', onDelete : 'CASCADE'})
    }
}



module.exports = Userintrest;
