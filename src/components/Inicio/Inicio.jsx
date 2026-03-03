import { profile } from "@/data/profile";
import HeroCard from "./HeroCard";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <HeroCard profile={profile} />

      <article className={styles.block}>
        <h2>Bienvenido</h2>
        <p>
          Este espacio resume mi perfil profesional y una seleccion de proyectos
          en los que trabaje con foco en calidad de codigo, estructura y experiencia
          de usuario.
        </p>
      </article>
    </section>
  );
};

export default Inicio;