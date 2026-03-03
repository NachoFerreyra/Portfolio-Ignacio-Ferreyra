import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Inicio.module.scss";

const HeroCard = ({ profile }) => {
  return (
    <article className={styles.heroCard}>
      <div className={styles.codeHeader}>
        <span>portfolio.config.js</span>
      </div>

      <pre className={styles.codeBlock}>
        <span>
          <em>const</em> developer = {'{'}
        </span>
        <span>
          {'  '}name: "{profile.name}",
        </span>
        <span>
          {'  '}role: "{profile.role}",
        </span>
        <span>
          {'  '}location: "{profile.location}",
        </span>
        <span>
          {'  '}availability: "{profile.availability}",
        </span>
        <span>{'}'};</span>
      </pre>

      <p>{profile.tagline}</p>

      <div className={styles.links}>
        <a href={profile.contacts.github} target="_blank" rel="noreferrer">
          <Github size={16} />
          GitHub
        </a>
        <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a href={`mailto:${profile.contacts.email}`}>
          <Mail size={16} />
          Email
        </a>
      </div>
    </article>
  );
};

export default HeroCard;
