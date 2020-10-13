module.exports = function (sequelize, DataTypes) {
  const Treatment = sequelize.define("Treatment", {
    treatment_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    length_of_time: {
      type: DataTypes.INT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  });
  return Treatment;
};
