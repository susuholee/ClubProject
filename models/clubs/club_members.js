const {DataTypes, Model} = require('sequelize');


class ClubMember  extends Model {
    static init(sequelize) {
        return super.init({
            club_id: { type: DataTypes.STRING(20), allowNull: false, primaryKey: true },
            user_id: { type: DataTypes.STRING(20), allowNull: false, primaryKey: true },
            signup_date : {type : DataTypes.DATE, allowNull : false}

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'ClubMember',
            tableName : 'club_members',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        // models.Keywords.belongsTo(models.User, {foreignKey : 'user_id', target : 'uid', onDelete : 'CASCADE'})
        models.ClubMember.belongsTo(models.Club, {foreignKey : 'club_id', target : 'club_id', onDelete : 'CASCADE'})
        models.ClubMember.belongsTo(models.User, {foreignKey: 'user_id',targetKey: 'uid',onDelete: 'CASCADE'});
    }
}



module.exports = ClubMember;
