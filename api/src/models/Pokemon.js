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
          msg: 'Es necesario que el pokemon tenga imagen',
        },
        isUrl: {
          msg: 'La imagen tiene que ser una url válida',
        },
      },
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isNumeric: {
          msg: 'La altura del pokemon debe ser un valor numérico',
        },
        min: {
          args: [0],
          msg: 'La altura del pokemon tiene que ser mayor a 0'
        }
      },
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isNumeric: {
          msg: 'El peso del pokemon debe ser un valor numérico',
        },
        min: {
          args: [0],
          msg: 'El peso del pokemon tiene que ser mayor a 0'
        }
      },
    },
  }, {
    timestamps: false, freezeTableName: true
  });
};
