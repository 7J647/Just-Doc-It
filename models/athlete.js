module.exports = function (sequelize, DataTypes) {
    var Athlete = sequelize.define("Athlete", {
        athlete_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sport: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            }
        },
        injury_site: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            }
        },
        injury: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            }
        }
    });

    // Athlete.associate = function(models){
    //     Athlete.hasMany(models.Treatment, {
    //         onDelete: "cascade"
    //     });
    // };

    return Athlete;
};