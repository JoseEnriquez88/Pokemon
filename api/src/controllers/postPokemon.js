const { Pokemon, Type } = require('../db.js');
const { Op } = require('sequelize');
// const formValidation = require('../helpers/formValidation.js');

const postPokemon = async (name, image, types, life, attack, defense, speed, height, weight) => {
    // formValidation(name, image, types, life, attack, defense, speed, height, weight);

    const newPokemon = await Pokemon.create({
        name,
        image,
        types,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
    });
    
    const pokemonType = await Type.findAll({
        where:{
            name:{
                [Op.in]: types.map((tipo) => tipo.toLowerCase()) 
            }
        }
    });

    await newPokemon.addTypes(pokemonType);

    if(!newPokemon) throw new Error(`El pokemon ${newPokemon.name} no pudo crearse`);
    return `El pokemon ${newPokemon.name} fue creado exitosamente`;
};

module.exports = postPokemon;
