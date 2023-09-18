import React, { useEffect, useState } from "react";
import style from './home.module.css'
import pikachu from '../../assets/pikachuGif.gif';
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  getPokemonsByName,
  cleanDetail,
  clearMessage,
} from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import CardList from "../CardList/CardList";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const pokemones = useSelector((state) => state.pokemons);
  const messageError = useSelector((state) => state.message);
  const itemsPerPage = 12; 
  const [currentPage, setCurrentPage] = useState(1); 

  const handleChange = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const onSearch = async (event) => {
    event.preventDefault();
    dispatch(getPokemonsByName(name));
  };

  const loadAllPokemons = () => {
    dispatch(getAllPokemons());
    setName("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!pokemones.length) {
      dispatch(getAllPokemons());
    }
    if (messageError !== "") {
      alert(messageError);
      dispatch(clearMessage());
    }
    return () => {
      dispatch(cleanDetail());
      dispatch(clearMessage());
    };
  }, [dispatch, pokemones, messageError]);

  // Cálculo de los índices de inicio y fin de los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemones = pokemones.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <NavBar handleChange={handleChange} onSearch={onSearch} onLoadAllPokemons={loadAllPokemons} />
      {currentPokemones.length === 0 ? ( // Verificar si no hay elementos en currentPokemones
        <img src={pikachu} alt="pikaPika" className={style.loader} />
      ) : (
        <div>
          <CardList pokemones={currentPokemones} />
          <Pagination totalPages={Math.ceil(pokemones.length / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange}/>
        </div>
      )}
    </div>
  );
  
};

export default Home;
