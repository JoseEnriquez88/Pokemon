const { Type } = require('../db');

const getTypesFromDB = async () => {
    const types = await Type.findAll({
        attributes: ['name'],
    });
    if(types.length === 0) throw new Error('No se encontraron tipos en la base de datos');
    return types;
};

module.exports = getTypesFromDB;
