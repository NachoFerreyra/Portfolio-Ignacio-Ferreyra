import { skills } from "../../data/skills";
import SkillGroup from "./SkillGroup";
import styles from "./Habilidades.module.scss";

const Habilidades = () => {
  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend & Data", items: skills.backendAndData },
    { title: "Analysis & Design", items: skills.analysisAndDesign },
    { title: "Tooling", items: skills.tooling },
  ].filter((group) => Array.isArray(group.items) && group.items.length);

  return (
    <section className={styles.habilidades}>
      <header className={styles.header}>
        <h1>const habilidades = {"{"}</h1>
        <p>
          "Habilidades formadas entre la facultad de Sistemas y el desarrollo de
          productos reales con React, donde aprendí a combinar el análisis de
          requerimientos con la construcción de dashboards y aplicaciones
          comerciales.
        </p>
      </header>

      <div className={styles.groups}>
        {groups.map((group) => (
          <SkillGroup
            key={group.title}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>

      <p className={styles.closure}>{"};"}</p>
    </section>
  );
};

export default Habilidades;
