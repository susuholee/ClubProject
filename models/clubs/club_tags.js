const { DataTypes, Model } = require('sequelize');

class ClubTag extends Model {
    static init(sequelize) {
        return super.init({
            club_id: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            tag: {
                type: DataTypes.STRING(50),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'ClubTag',
            tableName: 'club_tags',
            timestamps: false
        });
    }

    static associate(models) {
        models.ClubTag.belongsTo(models.Club, {
            foreignKey: 'club_id',
            onDelete: 'CASCADE'
        });
    }
}

module.exports = ClubTag;
