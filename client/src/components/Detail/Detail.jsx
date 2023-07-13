import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getPokemonById, cleanDetail } from '../../redux/actions';
import style from './detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, image, height, weight, life, attack, defense, speed, types } = useSelector(state => state.pokemons[0]);

    useEffect(() => {
        dispatch(getPokemonById(id));
        return () => {
            dispatch(cleanDetail());
        }
    }, [dispatch, id]);

    return (
        <div className={style.mainCntnr}>

            <NavBar />
            {name ? (
                <div className={style.container}>
                    <h1>{name}</h1>
                    {/* <p>{id}</p> */}
                    <div className={style.imgDataCntnr}>
                        <div className={style.imgCntnr}>
                            <img src={image} alt="img" />
                        </div>

                        <div className={style.dataCntnr}>
                            <div className={style.dataUno}>
                                <p>Height: {height}</p>
                                <p>Weight: {weight}</p>
                                <p>Life: {life}</p>
                                <p>Attack: {attack}</p>
                            </div>
                            <div className={style.dataDos}>
                                <p>Defense: {defense}</p>
                                <p>Speed: {speed}</p>
                                <p>Types:</p>
                                {types.map((type) => (
                                    <p key={type}>{type}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}

export default Detail;