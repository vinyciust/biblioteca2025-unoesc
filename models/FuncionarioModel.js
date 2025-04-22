import banco from "./banco.js";
import { DataTypes } from "sequelize";

const Funcionario = banco.define(
  "Funcionario",
  {
    idfuncionario: {
      field: "idfuncionario",          
      type:  DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    
    nomefuncionario: {
      field:    "nomefuncionario",
      type:     DataTypes.STRING,
      allowNull: false
    },

    cpf: {
      field:    "cpf",
      type:     DataTypes.STRING,
      allowNull: true
    },

    email: {
      field:    "email",
      type:     DataTypes.STRING,
      allowNull: false
    },

    telefone: {
      field:    "telefone",
      type:     DataTypes.STRING,
      allowNull: true
    },

    nascimento: {
      field:    "nascimento",
      type:     DataTypes.DATE,
      allowNull: true
    },

    salario: {
      field:    "salario",
      type:     DataTypes.STRING,
      allowNull: false
    },

    contratacao: {
      field:    "contratacao",
      type:     DataTypes.DATE,
      allowNull: false
    },

    ativo: {
        field:    "ativo",
        type:     DataTypes.STRING,
        allowNull: true
      },
  
    senha: {
        field:    "senha",
        type:     DataTypes.STRING,
        allowNull: true
      },
  
      token: {
        field:    "token",
        type:     DataTypes.STRING,
        allowNull: true
      }  


  },
  {
    tableName:       "funcionario",   
    freezeTableName: true,          
    timestamps:      false          
  }
);

export default Funcionario;
