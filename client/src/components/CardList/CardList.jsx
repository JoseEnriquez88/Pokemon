import style from './cardlist.module.css';
import Cards from '../Cards/Cards';

const CardList = ({ pokemones }) => {
  return (
    <div className={style.cards}>
      {
        pokemones.map(({ name, id, image, height, weight, life, attack, defense, speed, types }) => {
          return (
            <Cards
              key={id}
              id={id}
              name={name}
              image={image}
              height={height}
              weight={weight}
              life={life}
              attack={attack}
              defense={defense}
              speed={speed}
              types={types}
            />
          )
        })
      }
    </div>
  )
};

export default CardList;

