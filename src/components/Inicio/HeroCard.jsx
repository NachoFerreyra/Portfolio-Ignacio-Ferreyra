import { Github, Linkedin, Mail, MapPin, UserCheck } from "lucide-react";
import styles from "./Inicio.module.scss";

const HeroCard = ({ profile }) => {
  return (
    <article className={styles.heroCard}>
      <div className={styles.codeHeader}>
        <span>inicio.jsx</span>
      </div>

      <pre className={styles.codeBlock}>
        <span>
          <em>const</em> desarrollador = {"{"}
        </span>
        <span>
          {"  "}
          <strong>nombre</strong>: "{profile.name}",
        </span>
        <span>
          {"  "}
          <strong>rol</strong>: "{profile.role}",
        </span>
        <span>
          {"  "}
          <strong>ubicacion</strong>: "{profile.location}",
        </span>
        <span>
          {"  "}
          <strong>estado</strong>: "{profile.availability}",
        </span>
        <span>{"}"};</span>
      </pre>

      <div className={styles.inlineData}>
        <span>
          <MapPin size={14} /> {profile.location}
        </span>
        <span>
          <UserCheck size={14} /> {profile.availability}
        </span>
      </div>

      <div className={styles.links}>
        <a href={profile.contacts.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
        <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={`mailto:${profile.contacts.email}`}>
          <Mail size={16} /> Email
        </a>
      </div>
    </article>
  );
};

export default HeroCard;
