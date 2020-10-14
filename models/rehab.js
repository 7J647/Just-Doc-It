module.exports = function(sequelize, DataTypes) {
  const Rehab = sequelize.define("Rehab", {
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    num_sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      min: 1,
      },
  },
    num_reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      min: 1,
      },
  },
});
return Rehab;
};