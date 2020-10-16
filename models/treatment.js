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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  });


  // Treatment.associate = function(models){
  //   Treatment.belongsTo(models.Athlete, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  return Treatment;
};

// };
