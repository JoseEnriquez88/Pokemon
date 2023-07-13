import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import SortPokemons from "../SortPokemons/SortPokemons";
import style from './nav.module.css';

const Nav = ({ onSearch, handleChange, onLoadAllPokemons }) => {

    return (
        <nav className={style.navbar}>
            <div className={style.cntnr}>
                <button onClick={onLoadAllPokemons}>HOME</button>
                <div className={style.sort}>
                    <p>Ordenar por:</p>
                    <SortPokemons />
                </div>
                <div className={style.findOrCreate}>
                    <Link><button>CREAR</button></Link>
                    <SearchBar onSearch={onSearch} handleChange={handleChange} />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
