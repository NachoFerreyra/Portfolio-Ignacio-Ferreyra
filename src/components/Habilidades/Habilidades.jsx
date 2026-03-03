import { skills } from "@/data/skills";
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
        <h1>Habilidades principales</h1>
        <p>
          Conjunto de herramientas y conocimientos que aplico en proyectos de
          producto: desde analisis y diseño hasta implementacion y mantenimiento.
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
    </section>
  );
};

export default Habilidades;