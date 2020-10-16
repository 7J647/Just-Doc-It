module.exports = function (sequelize, DataTypes) {
  const Treatment = sequelize.define("Treatment", {
    treatment_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    progress_note: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Treatment.associate = function (models) {
    Treatment.belongsTo(models.Athlete, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Treatment;
};
