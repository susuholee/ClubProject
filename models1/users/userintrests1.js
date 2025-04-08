


const {DataTypes, Model} = require('sequelize');


class Userintrest extends Model {
    static init(sequelize) {
        return super.init({
        
            uid : {type : DataTypes.STRING(50) , allowNull : false},
            category_name : {type : DataTypes.STRING(20), allowNull : false},

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
        models.Userintrests.belongsTo(models.Users, {foreignKey : 'user_id_fk', target : 'kakao_id', onDelete : 'CASCADE'})
    }
}



module.exports = Userintrest;
