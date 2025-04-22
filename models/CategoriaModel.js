import banco from "./banco.js";
import { DataTypes } from "sequelize";

const Categoria = banco.define(
  "Categoria",
  {
    
    idcategoria: {
      field: "idcategoria",          
      type:  DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    
    nomecategoria: {
      field:    "nomecategoria",
      type:     DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName:       "categoria",   
    freezeTableName: true,          
    timestamps:      false          
  }
);

export default Categoria;
