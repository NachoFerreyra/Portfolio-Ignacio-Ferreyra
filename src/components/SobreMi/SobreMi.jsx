import { profiles } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./SobreMi.module.scss";

const SobreMi = () => {
  const { language, text } = useLanguage();
  const profile = profiles[language];
  const educationItems = (profile.educationHistory || []).map(
    (item) => `${item.title} - ${item.institution} (${item.period})`,
  );

  const languageItems = (profile.languages || []).map(
    (item) => `${item.name}: ${item.level}`,
  );

  const sections = [
    {
      title: text.about.professionalProfile,
      className: styles.titleCyan,
      items: [profile.professionalSummary],
    },
    {
      title: text.about.education,
      className: styles.titleGreen,
      items: educationItems,
    },
    {
      title: text.about.experience,
      className: styles.titleBlue,
      items: profile.about.experience,
    },
    {
      title: text.about.languages,
      className: styles.titleOrange,
      items: languageItems,
    },
    {
      title: text.about.interests,
      className: styles.titlePurple,
      items: profile.about.interests,
    },
  ].filter((section) => section.items?.length);

  return (
    <section className={styles.sobreMi}>
      <h1>{text.about.title}</h1>

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
