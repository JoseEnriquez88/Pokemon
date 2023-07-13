import style from './footer.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>©2023 Todos los derechos reservados. Desarrollado por Jose Enriquez.</p>
            <section className={style.section}>
                <a href="https://github.com/JoseEnriquez88">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/joseenriquez80/">
                    <FaLinkedin/>
                </a>
            </section>
        </footer>
    )
};

export default Footer;