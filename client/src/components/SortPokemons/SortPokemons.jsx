import { useSelector, useDispatch } from 'react-redux';
import { apiDbFilter, getAllTypes, alphabeticSort } from '../../redux/actions';
import style from './sortPokemons.module.css';

const SortPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const types = useSelector(state => state.types);

  const handleFilter = (event) => {
    const filterOrigin = event.target.value;
    dispatch(apiDbFilter(filterOrigin));
  };

  const handleTypes = (event) => {
    const filterType = event.target.value;
    if(filterType === 'all'){
      dispatch(getAllTypes(filterType));
    }
  };

  const handleSort = (event) => {
    dispatch(alphabeticSort())
  };

  return (
    <div className={style.mainCntnr}>
      <select className={style.select} defaultValue="" required onChange={handleSort}>
        <option value="" disabled>Alfabeticamente</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      <select className={style.origin} onChange={handleFilter}>
      <option value="" disabled>Origen</option>
        <option value="all" pokemons={pokemons}>Todos</option>
        <option value="api">Nativos</option>
        <option value="db">Creados</option>
      </select>

      <select className={style.attack}>
        <option value="attack">Ataque</option>
      </select>

      <select className={style.types} onChange={handleTypes}>
        <option value="" disabled>Tipos</option>
        <option value="all">Todos</option>
        {types.map((type, index) => (
          <option value={type} key={index}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default SortPokemons;
