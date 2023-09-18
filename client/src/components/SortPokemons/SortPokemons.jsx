import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiDbFilter, getAllTypes, alphabeticSort, resetAlphabeticSort, sortByType, sortByAttack } from '../../redux/actions';
import style from './sortPokemons.module.css';

const SortPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const copyPokemons = useSelector(state => state.copyPokemons);
  const tipos = useSelector(state => state.types);
  // console.log(tipos);

  const handleFilter = (event) => {
    const filterOrigin = event.target.value;
    dispatch(apiDbFilter(filterOrigin));
  };

  const handleTypes = (event) => {
    const filterType = event.target.value;
    let updatedPokemons = [];

    if (filterType === 'all') {
      updatedPokemons = copyPokemons; // Restaura todos los pokemones desde el estado de Redux
    } else {
      const selectedTypes = event.target.selectedOptions; // Obtiene las opciones seleccionadas
      const types = Array.from(selectedTypes).map(option => option.value); // Obtiene los valores de las opciones seleccionadas

      updatedPokemons = copyPokemons.filter(pokemon => types.every(type => pokemon.types.includes(type)));
      // Filtra los pokemones según los tipos seleccionados
    }

    if (updatedPokemons.length === 0) {
      alert(`No se encontraron pokemones con los tipos seleccionados`);
    }

    dispatch(sortByType(filterType)); // Actualiza el estado con el tipo seleccionado
  };


  // const handleSort = (event) => {
  //   const order = event.target.value === 'asc' ? 'asc' : 'desc';
  //   dispatch(alphabeticSort(order))
  // };

  const handleAlphabeticSort = (event) => {
    const order = event.target.value;
    if (order === 'reset') {
      dispatch(resetAlphabeticSort());
    } else {
      dispatch(alphabeticSort(order))
    }
  };

  const handleAttackSort = (event) => {
    const attack = event.target.value;
    if (attack === "min") {
      dispatch(sortByAttack("min"));
    } else if (attack === "max") {
      dispatch(sortByAttack("max"));
    }
  };

  useEffect(() => {
    dispatch(getAllTypes());
    dispatch(sortByType());
  }, [dispatch])

  return (
    <div className={style.mainCntnr}>
      <select className={style.select} defaultValue="" required onChange={handleAlphabeticSort}>
        Alfabeticamente
        <option value="" disabled>Alfabeticamente</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        <option value="reset">Resetear</option>
      </select>

      <select className={style.origin} defaultValue="" required onChange={handleFilter}>
        Origen
        <option value="" disabled>Origen</option>
        <option value="all" pokemons={pokemons}>Todos</option>
        <option value="api">Nativos</option>
        <option value="db">Creados</option>
      </select>

      <select className={style.attack} defaultValue="" required onChange={handleAttackSort}>
        Ataque
        <option value="" disabled>Ataque</option>
        <option value="min">Min-max</option>
        <option value="max">Max-min</option>
      </select>

      {/* <select className={style.types} defaultValue="" required onChange={handleTypes}>
        <option value="" disabled>Tipos</option>
        {tipos.map((type) => (
          <option value={type} key={type}>{type}</option>
        ))}
      </select> */}
      <select className={style.types} defaultValue="" required name="types" id="types" onChange={handleTypes}>
        Tipos
        <option value="" disabled>Tipos</option>
        {tipos.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortPokemons;
