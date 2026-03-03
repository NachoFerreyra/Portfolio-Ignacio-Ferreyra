import { profile } from "@/data/profile";
import HeroCard from "./HeroCard";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <HeroCard profile={profile} />

      <article className={styles.block}>
        <h2>Perfil profesional</h2>

        <p>{profile.professionalSummary}</p>
      </article>
    </section>
  );
};

export default Inicio;
