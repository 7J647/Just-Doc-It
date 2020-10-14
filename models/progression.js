module.exports = function (sequelize, DataTypes) {
    const Progress = sequelize.define("Progress", {
        progress_note: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
        }
        }
});
    return Progress;
};

