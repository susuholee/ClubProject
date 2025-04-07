
const {DataTypes, Model} = require('sequelize');


class EventParticipant  extends Model {
    static init(sequelize) {
        return super.init({
            participant_id : {type : DataTypes.STRING(20), allowNull : false, primaryKey : true},
            event_id: { type: DataTypes.STRING(20), allowNull: false },
            user_id: { type: DataTypes.STRING(20), allowNull: false }
        }, {
            sequelize,
            timestamps : true ,
            modelName : 'EventParticipant',
            tableName : 'event_participants',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.EventParticipant.belongsTo(models.Event, {foreignKey : 'event_id', targetKey : 'id', onDelete : 'CASCADE'})
        models.EventParticipant.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'uid', onDelete: 'CASCADE'});
    }
}



module.exports = EventParticipant;
