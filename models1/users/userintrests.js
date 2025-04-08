
const {DataTypes, Model} = require('sequelize');


class Userintrest extends Model {
    static init(sequelize) {
        return super.init({
            user_id: {type: DataTypes.STRING(20),allowNull: false,primaryKey: true},
            category_id : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Userintrest',
            tableName : 'userintrests',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.UserInterest.belongsTo(models.User, {foreignKey : 'kakao_id', targetKey : 'kakao_uid', onDelete : 'CASCADE'})
    }
}



module.exports = Userintrest;
