import style from "./searchbar.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = ({ onSearch, handleChange }) => {
  return (
    <form className={style.bar}>
      <input
        onChange={handleChange}
        className={style.input}
        placeholder="Buscar Pokemon"
        title="Digite el nombre del pokemon para realizar la búsqueda"
      />
      <button onClick={onSearch} className={style.btn} title="Buscar">
        <SearchRoundedIcon className={style.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
