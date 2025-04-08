
const { DataTypes, Model} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        return super.init({
            kakao_uid : {type : DataTypes.STRING(20), allowNull : false, primaryKey: true },
            name : {type : DataTypes.STRING(20), allowNull : false},
            profile_image : {type : DataTypes.STRING(200), allowNull : false},
            age : {type : DataTypes.INTEGER(20), allowNull : false},
            gender : {type : DataTypes.STRING(20), allowNull : false},
            introduction : {type : DataTypes.STRING(200), allowNull : false},
            major_location : {type : DataTypes.STRING(120), allowNull : false}
  
        }, {
            sequelize,
            timestamps : true,
            modelName : 'User',
            tableName : 'users',
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci'
        })
    }
    static associate(models) {
        models.User.hasMany(models.Point, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        models.User.hasMany(models.UserInterest, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        models.User.hasMany(models.Club, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        models.User.hasMany(models.Review, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        models.User.hasMany(models.Heart, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        models.User.hasMany(models.EventParticipant, {foreignKey : 'user_id', sourceKey : 'kakao_uid'})
        // models.Users.hasMany(models.Members, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        // models.Users.hasMany(models.Categorys, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        // models.Users.hasMany(models.Locations, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        // models.Users.hasMany(models.Participants, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
        // models.Users.hasMany(models.Verifications, {foreignKey : 'user_id_fk', sourceKey : 'uid'})
    }
}


module.exports = User;
