// src/models/AutorModel.js
import banco from "./banco.js";
import { DataTypes } from "sequelize";

const Autor = banco.define(
  "Autor",
  {
    IDAUTOR: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,   // ← this alone creates exactly one SERIAL/IDENTITY
      allowNull: false,
      // remove any defaultValue / Sequelize.literal here!
    },
    AUTOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName:       "autor",       // exact lowercase table name
    freezeTableName: true,          // no pluralization
    timestamps:      false,         // no createdAt/updatedAt columns
  }
);

export default Autor;
