const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");
 
const User = sequelize.define("users", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = User;