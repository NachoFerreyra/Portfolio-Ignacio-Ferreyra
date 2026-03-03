import { skills } from "@/data/skills";
import SkillGroup from "./SkillGroup";
import styles from "./Habilidades.module.scss";

const Habilidades = () => {
  const groups = [
    { title: "Lenguajes", items: skills.languages },
    { title: "Metodologias", items: skills.methodologies },
    { title: "Frontend", items: skills.frontendCv || skills.frontend },
    { title: "Bases de datos", items: skills.databases },
    { title: "Herramientas", items: skills.toolsCv },
    { title: "Analisis y diseño", items: skills.analysisAndDesign },
  ].filter((group) => Array.isArray(group.items) && group.items.length);

  return (
    <section className={styles.habilidades}>
      <header className={styles.header}>
        <h1>Habilidades tecnicas</h1>
        <p>
          Base tecnica construida entre la carrera y proyectos reales,
          combinando desarrollo frontend, analisis funcional y trabajo en
          equipo.
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
