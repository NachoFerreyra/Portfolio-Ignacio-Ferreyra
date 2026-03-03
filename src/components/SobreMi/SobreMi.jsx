import { profile } from "@/data/profile";
import styles from "./SobreMi.module.scss";

const SobreMi = () => {
  const sections = [
    {
      title: "Formacion",
      className: styles.titleGreen,
      items: profile.about.education,
    },
    {
      title: "Experiencia",
      className: styles.titleBlue,
      items: profile.about.experience,
    },
    {
      title: "Intereses",
      className: styles.titlePurple,
      items: profile.about.interests,
    },
  ];

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