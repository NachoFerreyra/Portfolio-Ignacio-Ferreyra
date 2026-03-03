import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import HeroCard from "./HeroCard";
import MetricsGrid from "./MetricsGrid";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <HeroCard profile={profile} />

      <div className={styles.block}>
        <h2>Resumen tecnico</h2>
        <p>
          Este portfolio toma como base tres codebases reales con patrones
          productivos: rutas anidadas, componentes modulares y estilos
          consistentes por dominio.
        </p>
      </div>

      <MetricsGrid projects={projects} />
    </section>
  );
};

export default Inicio;
