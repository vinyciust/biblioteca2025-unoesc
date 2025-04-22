// src/models/LivroModel.js
import banco from "./banco.js";
import { DataTypes } from "sequelize";

export default banco.define(
  "Livro",               
  {
    IDLIVRO: {
      type: DataTypes.INTEGER,
      field:    "idlivro",
      primaryKey: true,
      autoIncrement: true,   
      allowNull: false,

    },
    TITULO: {
      field:    "titulo",
      type: DataTypes.STRING,
      allowNull: true,       
    },

    ANO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PAGINAS: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EDICAO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    RESUMO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EMPRESTADO: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    IDCATEGORIA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    IDEDITORA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    IDAUTOR: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    tableName:       "livro",    
    freezeTableName: true,       
    timestamps:      false       
  }
);
