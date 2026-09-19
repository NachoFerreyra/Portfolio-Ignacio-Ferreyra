import { skillsByLanguage } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import SkillGroup from "./SkillGroup";
import styles from "./Habilidades.module.scss";

const Habilidades = () => {
  const { language, text } = useLanguage();
  const skills = skillsByLanguage[language];
  const groups = [
    { title: text.skills.groups.languages, items: skills.languages },
    { title: text.skills.groups.methodologies, items: skills.methodologies },
    {
      title: text.skills.groups.frontend,
      items: skills.frontendCv || skills.frontend,
    },
    { title: text.skills.groups.backend, items: skills.backend },
    { title: text.skills.groups.databases, items: skills.databases },
    { title: text.skills.groups.testing, items: skills.testing },
    { title: text.skills.groups.tools, items: skills.toolsCv },
    {
      title: text.skills.groups.analysisAndDesign,
      items: skills.analysisAndDesign,
    },
  ].filter((group) => Array.isArray(group.items) && group.items.length);

  return (
    <section className={styles.habilidades}>
      <header className={styles.header}>
        <h1>{text.skills.title}</h1>
        <p>{text.skills.description}</p>
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
