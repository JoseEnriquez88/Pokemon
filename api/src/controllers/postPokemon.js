const { Pokemon, Type } = require('../db.js');
const { Op } = require('sequelize');
const formValidation = require('../helpers/formValidation.js');

const postPokemon = async (name, type, life, attack, defense, speed, height, weight) => {
    formValidation(name, type, life, attack, defense, speed, height, weight);

    const newPokemon = await Pokemon.create({
        name,
        type,
        life,
        attack,
        defense,
        speed,
        height,
        weight
    });

    const types = await Type.findAll({
        where: {
            name: {
                [Op.in]: type.map(tipo => tipo.toLowerCase())
            }
        }
    });

    await newPokemon.setTypes(types);

    if(!newPokemon) throw new Error(`El pokemon ${newPokemon.name} no pudo crearse`);
    return `El pokemon ${newPokemon.name} fue creado`;
};

module.exports = postPokemon;
