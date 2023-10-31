import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_ALL_TYPES,
  API_DB_FILTER,
  POST_POKEMON,
  ALPHABETIC_SORT,
  RESET_ALPHABETIC_SORT,
  SORT_BY_TYPE,
  CLEAN_DETAIL,
  CLEAN_MESSAGE,
  ERROR,
  SORT_BY_ATTACK,
} from "./action-types";
import axios from "axios";

export const getAllPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data || data.length === 0)
        throw new Error("No se encuentran pokemones para mostrar");

      const pokemons = data.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.image,
        height: pokemon.height,
        weight: pokemon.weight,
        life: pokemon.life,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        types: pokemon.types,
      }));

      dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const getPokemonsByName = (name) => {
  const URL = "http://localhost:3001/name";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}?name=${name}`);
      // if(!data.find((pokemon) => pokemon.name === name)) throw new Error(`no se encontró el pokemon con el nombre: ${name}`);

      const pokemonFound = data.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.image,
        height: pokemon.height,
        weight: pokemon.weight,
        life: pokemon.life,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        types: pokemon.types,
      }));
      dispatch({ type: GET_POKEMONS_BY_NAME, payload: pokemonFound });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const getPokemonById = (id) => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/${id}`);
      if (!data) throw new Error(`No se encontró el pokemon con el id: ${id}`);

      const pokemon = {
        name: data.name,
        id: data.id,
        image: data.image,
        height: data.height,
        weight: data.weight,
        life: data.life,
        attack: data.attack,
        defense: data.defense,
        speed: data.speed,
        types: data.types,
      };

      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: pokemon,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const getAllTypes = () => {
  const endpoint = "http://localhost:3001/types-db";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      if (!data || data.length === 0)
        throw new Error("No se encuentran tipos en la base de datos");

      // const typesFound = data.map((tipo) => tipo.name);
      // console.log(typesFound);
      dispatch({
        type: GET_ALL_TYPES,
        payload: data,
      });
      return data;
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const createPokemon = (pokemonCreado) => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, pokemonCreado);
      const createdPokemon = response.data;

      dispatch({
        type: POST_POKEMON,
        payload: createdPokemon,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const apiDbFilter = (filterType) => {
  return {
    type: API_DB_FILTER,
    payload: filterType,
  };
};

export const alphabeticSort = (order) => {
  return {
    type: ALPHABETIC_SORT,
    payload: order,
  };
};

export const resetAlphabeticSort = () => {
  return {
    type: RESET_ALPHABETIC_SORT,
  };
};

export const sortByType = (type) => {
  return {
    type: SORT_BY_TYPE,
    payload: type,
  };
};

export const sortByAttack = (attack) => {
  return {
    type: SORT_BY_ATTACK,
    payload: attack,
  };
};

export const cleanDetail = () => {
  return async (dispatch) => {
    return dispatch({
      type: CLEAN_DETAIL,
    });
  };
};

export const clearMessage = () => {
  return async (dispatch) => {
    return dispatch({
      type: CLEAN_MESSAGE,
    });
  };
};
