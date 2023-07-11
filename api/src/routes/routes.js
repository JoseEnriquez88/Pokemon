const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//importo los handlers
const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler');
const getPokemonsByIdHandler = require('../handlers/getPokemonsByIdHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');
const postPokemonHandler = require('../handlers/postPokemonHandler');
const getPokemonByTypeHandler = require('../handlers/getPokemonByTypeHandler');

const getTypesFromDBHandler = require('../handlers/getTypesFromDBHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//!GET | /pokemons
router.get('/pokemons', getAllPokemonsHandler);

//!GET | /pokemons/:idPokemon
router.get('/pokemons/:id', getPokemonsByIdHandler);

//! GET | /pokemons/name?="..."
router.get('/name', getPokemonByNameHandler);

//!POST | /pokemons
router.post('/pokemons', postPokemonHandler);

//!GET | /types
router.get('/types', getPokemonByTypeHandler);

//! Implmento una ruta para obtener los tipos de la base de datos
router.get('/types-db', getTypesFromDBHandler);

module.exports = router;
