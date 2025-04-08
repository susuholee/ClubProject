




const {DataTypes, Model} = require('sequelize');


class Member extends Model {
    static init(sequelize) {
        return super.init({
            member_uid : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},
            signup_date : {type : DataTypes.STRING(20), allowNull : false}

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Member',
            tableName : 'members',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        // models.Keywords.belongsTo(models.User, {foreignKey : 'user_id', target : 'uid', onDelete : 'CASCADE'})
        models.Members.belongsTo(models.Clubs, {foreignKey : 'club_id_fk', target : 'club_id', onDelete : 'CASCADE'})
    }
}



module.exports = Member;
