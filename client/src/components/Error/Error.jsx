import style from './error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={style.mainCntnr}>
            <div className={style.container}>
                <h1 className={style.cuatro}> <span className={style.error}>ERROR</span> 404</h1>
                {/* <img className={style.gif} src="https://64.media.tumblr.com/e0af5f2a3d43a68d48dbf729868e0944/tumblr_o4hbx6d0sc1sdrw6vo1_500.gif" alt="pika" /> */}
                <img className={style.gif} src="https://i.redd.it/1wxi2yjtxb7a1.gif" alt="pika" />
                <div className={style.textCntnr}>
                    <h2>Lo siento, pero parece que te has perdido!</h2>
                    <h2>La página que estas buscando no se encuentra en ninguna parte.</h2>
                </div>
                <Link to='/home'>
                    <button className={style.btn}>volver a la pagina principal</button>
                </Link>
            </div>

        </div>
    )
}

export default Error;