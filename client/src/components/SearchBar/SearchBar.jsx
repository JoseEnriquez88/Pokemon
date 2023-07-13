import style from './searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch, handleChange }) => {
   return (
      <form className={style.bar}>
         <input onChange={handleChange} placeholder='Buscar Pokemon' />
         <submit onClick={onSearch} className={style.btn}><FaSearch/></submit>
      </form>
   );
};

export default SearchBar;