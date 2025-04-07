
const {DataTypes, Model} = require('sequelize');


class Verification extends Model {
    static init(sequelize) {
        return super.init({
            event_id: {
            type: DataTypes.STRING(20),allowNull: false,primaryKey: true},
            participant_id : {type : DataTypes.STRING(20),primaryKey : true, allowNull : false},
            image : {type : DataTypes.STRING(200), allowNull : false}
        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Verification',
            tableName : 'verifications',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Verification.belongsTo(models.Event, {foreignKey : 'event_id', targetKey : 'id', onDelete : 'CASCADE'})
    }
}



module.exports = Verification;