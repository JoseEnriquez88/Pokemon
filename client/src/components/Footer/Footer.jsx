import style from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        ©2023 Todos los derechos reservados. Desarrollado por Jose Enriquez.
      </p>
      <section className={style.section}>
        <a href="https://github.com/JoseEnriquez88" title="Ir a Github">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/joseenriquez80/"
          title="Ir a LinkeInd"
        >
          <LinkedInIcon />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
