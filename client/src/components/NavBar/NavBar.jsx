import style from "./nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SortPokemons from "../SortPokemons/SortPokemons";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import logo from "../../assets/pokeCut.png";

const Nav = ({ onSearch, handleChange, onLoadAllPokemons }) => {
  return (
    <nav className={style.navbar}>
      <div className={style.cntnr}>
        <img
          src={logo}
          alt="logo"
          className={style.logo}
          onClick={onLoadAllPokemons}
        />
        <div className={style.sort}>
          <SortPokemons />
        </div>
        <div className={style.findOrCreate}>
          <Link to="/create">
            <AddBoxRoundedIcon
              titleAccess="Crear Pokemon"
              className={style.createBtn}
            />
          </Link>
          <SearchBar onSearch={onSearch} handleChange={handleChange} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
