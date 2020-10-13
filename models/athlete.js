module.exports = function (sequelize, DataTypes) {
    const Athlete = sequelize.define("Athlete", {
        athlete_name: DataTypes.STRING,
        sport: DataTypes.STRING,
        injury_site: DataTypes.STRING,
        injury: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    });
    return Athlete;
};