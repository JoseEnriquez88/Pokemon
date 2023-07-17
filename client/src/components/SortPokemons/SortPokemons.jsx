import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiDbFilter, getAllTypes, alphabeticSort, resetAlphabeticSort, sortByType, sortByAttack } from '../../redux/actions';
import style from './sortPokemons.module.css';

const SortPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const tipos = useSelector(state => state.types);
  console.log(tipos);

  const handleFilter = (event) => {
    const filterOrigin = event.target.value;
    dispatch(apiDbFilter(filterOrigin));
  };

  // const handleTypes = (event) => {
  //   const filterType = event.target.value;
  //   if (filterType === 'all') {
  //     dispatch(getAllTypes(filterType));
  //   }
  // };

  const handleTypes = (event) => {
    const filterType = event.target.value;
    if (filterType === 'all') {
      dispatch(getAllTypes(filterType));
    } else {
      dispatch(sortByType(filterType));
      const filteredPokemons = pokemons.filter(pokemon => pokemon.types.includes(filterType));
      if (filteredPokemons.length === 0) alert(`No se encontraron pokemons del tipo ${filterType}`)
    }
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
        <option value="min">Menor a mayor</option>
        <option value="max">Mayor a menor</option>
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
