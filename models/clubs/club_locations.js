



const {DataTypes, Model} = require('sequelize');


class ClubLocation  extends Model {
    static init(sequelize) {
        return super.init({
            club_id : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},
            point : {type : DataTypes.STRING(200), allowNull : false},
            polygon : {type : DataTypes.STRING(200), allowNull : false}

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'ClubLocation',
            tableName : 'club_locations',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.ClubLocation.belongsTo(models.Clubs, {foreignKey : 'club_id', target : 'club_id', onDelete : 'CASCADE'})
    }
}



module.exports = ClubLocation ;
