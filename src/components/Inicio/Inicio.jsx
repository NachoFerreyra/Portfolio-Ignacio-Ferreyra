import { profile } from "@/data/profile";
import HeroCard from "./HeroCard";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <HeroCard profile={profile} />

      <article className={styles.block}>
        <h2>Perfil profesional</h2>
        <p>
          {profile.name} es {profile.role} con foco en analisis de requerimientos,
          desarrollo web colaborativo y construccion de interfaces escalables.
        </p>
      </article>
    </section>
  );
};

export default Inicio;