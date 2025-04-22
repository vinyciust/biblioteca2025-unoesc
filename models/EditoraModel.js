import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import banco from "./banco.js";


// EDITORA
export default banco.define('EDITORA', {
    IDEDITORA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    EDITORA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  

  