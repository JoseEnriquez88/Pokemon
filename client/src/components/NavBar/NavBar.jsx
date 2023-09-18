import style from './nav.module.css';
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import SortPokemons from "../SortPokemons/SortPokemons";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Nav = ({ onSearch, handleChange, onLoadAllPokemons }) => {

    return (
        <nav className={style.navbar}>
            <div className={style.cntnr}>
                <button onClick={onLoadAllPokemons} className={style.homeBtn} title='Resetear Pokemones'><CatchingPokemonIcon className={style.pokemon}/>Pokemon</button>
                <div className={style.sort}>
                    {/* <p>Ordenar por:</p> */}
                    <SortPokemons />
                </div>
                <div className={style.findOrCreate}>
                    <Link to='/create'><button className={style.createBtn}><AddBoxRoundedIcon titleAccess='Crear Pokemon'/></button></Link>
                    <SearchBar onSearch={onSearch} handleChange={handleChange} />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
