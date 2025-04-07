
const {DataTypes, Model} = require('sequelize');


class Club extends Model {
    static init(sequelize) {
        return super.init({
            club_id : {type : DataTypes.STRING(20), primaryKey : true, allowNull : false},
            name : {type : DataTypes.STRING(100), allowNull : false},
            introduction : {type : DataTypes.STRING(2000), allowNull : false},
            image : {type : DataTypes.STRING(300), allowNull : true},
            user_id : {type : DataTypes.STRING(200), allowNull : false},
            member_limit : {type : DataTypes.INTEGER(10), allowNull : false},
            category_id : {type : DataTypes.STRING(20), allowNull : false},
            allow_guest : {type : DataTypes.BOOLEAN, defaultValue: false},
            view_count : {type : DataTypes.INTEGER(10)},

        }, {
            sequelize,
            timestamps : true ,
            modelName : 'Club',
            tableName : 'clubs',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.Club.hasMany(models.ClubLocation, {foreignKey : 'club_id', sourceKey : 'club_id'})
        models.Club.hasMany(models.ClubMember, {foreignKey : 'club_id', sourceKey : 'club_id'})
        models.Club.hasMany(models.Event, {foreignKey : 'club_id', sourceKey : 'club_id'})
        models.Club.belongsTo(models.Category, {foreignKey : 'category_id', onDelete : 'CASCADE'})
        models.Club.belongsToMany(models.Tag, {through: 'ClubTagMap', foreignKey: 'club_id', otherKey: 'tag_id'});
    }
}



module.exports = Club;