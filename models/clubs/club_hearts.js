

const {DataTypes, Model} = require('sequelize');


class Heart extends Model {
    static init(sequelize) {
        return super.init({
            id: {type : DataTypes.INTEGER(10),primaryKey : true, allowNull : false},
            user_id: { type: DataTypes.STRING(20), allowNull: false },
            club_id: { type: DataTypes.STRING(20), allowNull: false }

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Heart',
            tableName : 'club_hearts',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Heart.belongsTo(models.User, {foreignKey : 'user_id', target : 'uid', onDelete : 'CASCADE'})
        models.Heart.belongsTo(models.Club, {foreignKey: 'club_id',targetKey: 'club_id',onDelete: 'CASCADE'});
    }
}



module.exports = Heart;
