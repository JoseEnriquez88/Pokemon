const { Pokemon, Type } = require('../db.js');
const { Op } = require('sequelize');
const formValidation = require('../helpers/formValidation.js');

const postPokemon = async (name, image, types, life, attack, defense, speed, height, weight) => {
    formValidation(name, image, types, life, attack, defense, speed, height, weight);

    const validTypes = types.filter(type => type); // Filtrar elementos undefined

    if (validTypes.length !== types.length) {
        throw new Error('Se encontraron tipos inválidos');
    }

    const foundTypes = await Type.findAll({
        where: {
            name: {
                [Op.in]: validTypes.map(type => type.toLowerCase())
            }
        }
    });

    if (!foundTypes.length) {
        const tipoNames = validTypes.join(', ');
        throw new Error(`No se encontraron tipos válidos: ${tipoNames}`);
    }

    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight
    });

    // Asociar los tipos al nuevo Pokémon
    await newPokemon.addTypes(foundTypes);

    // Obtener el Pokémon con los tipos asociados
    const pokemonWithTypes = await Pokemon.findByPk(newPokemon.id, {
        include: Type
    });

    if (!pokemonWithTypes) {
        throw new Error(`El pokemon ${newPokemon.name} no pudo crearse`);
    }

    return pokemonWithTypes;
};

module.exports = postPokemon;
