import { profile } from "@/data/profile";
import styles from "./SobreMi.module.scss";

const SobreMi = () => {
  const educationItems = (profile.educationHistory || []).map(
    (item) => `${item.title} - ${item.institution} (${item.period})`,
  );

  const languageItems = (profile.languages || []).map(
    (item) => `${item.name}: ${item.level}`,
  );

  const sections = [
    {
      title: "Perfil profesional",
      className: styles.titleCyan,
      items: [profile.professionalSummary],
    },
    {
      title: "Formacion academica",
      className: styles.titleGreen,
      items: educationItems,
    },
    {
      title: "Experiencia y enfoque",
      className: styles.titleBlue,
      items: profile.about.experience,
    },
    {
      title: "Idiomas",
      className: styles.titleOrange,
      items: languageItems,
    },
    {
      title: "Intereses",
      className: styles.titlePurple,
      items: profile.about.interests,
    },
  ].filter((section) => section.items?.length);

  return (
    <section className={styles.sobreMi}>
      <h1>Sobre mi</h1>

      <div className={styles.grid}>
        {sections.map((section) => (
          <article key={section.title} className={styles.card}>
            <h2 className={section.className}>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SobreMi;