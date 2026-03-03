import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Contacto.module.scss";

const ContactLinks = ({ contacts }) => {
  return (
    <aside className={styles.linksCard}>
      <h2>Canales directos</h2>

      <a href={`mailto:${contacts.email}`}>
        <Mail size={16} />
        {contacts.email}
      </a>

      <a href={contacts.github} target="_blank" rel="noreferrer">
        <Github size={16} />
        {contacts.github}
      </a>

      <a href={contacts.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={16} />
        {contacts.linkedin}
      </a>

      <div className={styles.note}>
        <p>
          Tip: si queres exponer links reales de GitHub/LinkedIn, actualiza
          <code>src/data/profile.js</code>.
        </p>
      </div>
    </aside>
  );
};

export default ContactLinks;
