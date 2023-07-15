import style from './searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch, handleChange }) => {
   return (
      <form className={style.bar}>
         <input onChange={handleChange} placeholder='Buscar Pokemon' />
         <button onClick={onSearch} className={style.btn}><FaSearch/></button>
      </form>
   );
};

export default SearchBar;