import style from './sortPokemons.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiDbFilter, getAllTypes, alphabeticSort, resetAlphabeticSort, sortByType, sortByAttack } from '../../redux/actions';

const SortPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const copyPokemons = useSelector(state => state.copyPokemons);
  const tipos = useSelector(state => state.types);

  const handleFilter = (event) => {
    const filterOrigin = event.target.value;
    dispatch(apiDbFilter(filterOrigin));
  };

  const handleTypes = (event) => {
    const filterType = event.target.value;
    let updatedPokemons = [];

    if (filterType === 'all') {
      updatedPokemons = copyPokemons; 
    } else {
      const selectedTypes = event.target.selectedOptions; 
      const types = Array.from(selectedTypes).map(option => option.value); 
      updatedPokemons = copyPokemons.filter(pokemon => types.every(type => pokemon.types.includes(type)));
    }

    if (updatedPokemons.length === 0) {
      alert(`No se encontraron pokemones con los tipos seleccionados`);
    }

    dispatch(sortByType(filterType)); 
  };

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
      <select className={style.alfabetic} defaultValue="" required onChange={handleAlphabeticSort}>
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
