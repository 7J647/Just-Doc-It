module.exports = function (sequelize, DataTypes) {
    const Trainer = sequelize.define("Trainer", {
        trainer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
                }
        }
    });
    return Trainer;
};
