import React, { useEffect } from "react";
import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import pikachu from "../../assets/pikachuGif.gif";
import NavBar from "../NavBar/NavBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, image, height, weight, life, attack, defense, speed, types } =
    useSelector((state) =>
      state.pokemons.length > 0 ? state.pokemons[0] : {}
    );

  const { pokemons } = useSelector((state) => state);
  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <NavBar />
      <div className={style.mainCntnr}>
        {name ? (
          <div className={style.container}>
            <div className={style.imgCntnr}>
              <img src={image} alt="img" />
            </div>
            <div className={style.dataContainer}>
              <div className={style.titleCntnr}>
                <Link to="/home" className={style.return}>
                  <button className={style.returnBtn} title="Volver al inicio">
                    <ArrowBackIcon className={style.icon} />
                  </button>
                </Link>
                <h1 className={style.title}>{name}</h1>
              </div>
              <div className={style.dataOne}>
                <h3>Id: {id}</h3>
                <h3>Life: {life}</h3>
                <h3>Attack: {attack}</h3>
                <h3>Defense: {defense}</h3>
                <h3>Speed: {speed}</h3>
              </div>
              <div className={style.dataTwo}>
                <h3>Height: {height}</h3>
                <h3>Weight: {weight}</h3>
                <div className={style.typesContainer}>
                  <h3>Types:</h3>
                  {types.map((type) => (
                    <p key={type}>{type}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img src={pikachu} alt="pikachu" className={style.loading} />
        )}
      </div>
    </div>
  );
};

export default Detail;
