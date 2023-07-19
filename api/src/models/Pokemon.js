const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Es necesario que el pokemon tenga nombre',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'El pokemon requiere de una imagen para poder crearse',
        },
        isUrl: {
          msg: 'La imagen tiene que ser una url válida',
        },
      },
    },
    life: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty:{
          msg: 'El campo vida es obligatorio para la creacion del pokemon',
        },
      },
    },
    attack: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty:{
          msg: 'El campo ataque es obligatorio para la creacion del pokemon',
        },
      },
    },
    defense: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty:{
          msg: 'El campo defensa es obligatorio para la creacion del pokemon',
        },

      },
    },
    speed: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {
    timestamps: false, freezeTableName: true
  });
};
