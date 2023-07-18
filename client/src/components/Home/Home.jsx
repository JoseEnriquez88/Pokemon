import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getPokemonsByName, cleanDetail, clearMessage } from '../../redux/actions';
// import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import CardList from '../CardList/CardList';

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const pokemones = useSelector((state) => state.pokemons);
  const messageError = useSelector((state) => state.message)

  const handleChange = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const onSearch = async (event) => {
    event.preventDefault();
    dispatch(getPokemonsByName(name))
  };

  const loadAllPokemons = () => {
    dispatch(getAllPokemons());
    setName('');
  };

  useEffect(() => {
    if (!pokemones.length) {
      dispatch(getAllPokemons());
    }
    if (messageError !== '') {
      alert(messageError);
      dispatch(clearMessage());
    }
    return () => {
      dispatch(cleanDetail()); 
      dispatch(clearMessage());
    };
  }, [dispatch, pokemones, messageError]);

  return (
    <div>
      <NavBar handleChange={handleChange} onSearch={onSearch} onLoadAllPokemons={loadAllPokemons} />
      <CardList pokemones={pokemones} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
