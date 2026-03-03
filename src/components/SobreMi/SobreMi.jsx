import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import JourneyBlock from "./JourneyBlock";
import styles from "./SobreMi.module.scss";

const SobreMi = () => {
  return (
    <section className={styles.sobreMi}>
      <article className={styles.intro}>
        <h1>function sobreMi() {'{'}</h1>
        <p>{profile.summary}</p>
        <p>
          Trabajo con una mentalidad orientada a producto: analisis del problema,
          estructura mantenible y entrega iterativa.
        </p>
      </article>

      <div className={styles.timeline}>
        {projects.map((project) => (
          <JourneyBlock key={project.id} project={project} />
        ))}
      </div>

      <p className={styles.closure}>{'}'}</p>
    </section>
  );
};

export default SobreMi;
