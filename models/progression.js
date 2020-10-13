module.exports = function (sequelize, DataTypes) {
    const Progress = sequelize.define("Progress", {
        progress_note: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    });
    return Progress;
};