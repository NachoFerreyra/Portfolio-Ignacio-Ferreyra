import { profiles } from "@/data/profile";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Readme.module.scss";

const Readme = () => {
  const { openFile } = useOutletContext();
  const { language, text } = useLanguage();
  const profile = profiles[language];

  return (
    <section className={styles.readme}>
      <h1>{text.readme.title}</h1>

      <p>{text.readme.description}</p>

      <article className={styles.card}>
        <h2>{text.readme.contactDetails}</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.contacts.email}`}>
              {profile.contacts.email}
            </a>
          </li>
          <li>
            <strong>{text.readme.phone}:</strong> {profile.phone}
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={profile.contacts.github} target="_blank" rel="noreferrer">
              {profile.contacts.github}
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {profile.contacts.linkedin}
            </a>
          </li>
        </ul>
      </article>

      <article className={styles.card}>
        <h2>{text.readme.quickAccess}</h2>
        <div className={styles.quickActions}>
          <button type="button" onClick={() => openFile("proyectos")}>
            {text.readme.projects}
          </button>
          <button type="button" onClick={() => openFile("habilidades")}>
            {text.readme.skills}
          </button>
          <button type="button" onClick={() => openFile("contacto")}>
            {text.readme.contact}
          </button>
          <button type="button" onClick={() => openFile("sobre-mi")}>
            {text.readme.about}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Readme;
