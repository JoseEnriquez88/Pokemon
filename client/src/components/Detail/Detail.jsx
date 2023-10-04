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
            <h1 className={style.title}>{name}</h1>
            
            <div className={style.imgDataCntnr}>
              <div className={style.imgCntnr}>
                <img src={image} alt="img" />
                <div className={style.dataCntnr}>
                  <div className={style.dataUno}>
                    <p>Id: {id}</p>
                    <p>Life: {life}</p>
                    <p>Attack: {attack}</p>
                    <p>Defense: {defense}</p>
                    <p>Speed: {speed}</p>
                  </div>
                  <div className={style.dataDos}>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Types:</p>
                    {types.map((type) => (
                      <p key={type}>{type}</p>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/home" className={style.return} title="Volver a inicio">
                <ArrowBackIcon className={style.icon} />
              </Link>
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
