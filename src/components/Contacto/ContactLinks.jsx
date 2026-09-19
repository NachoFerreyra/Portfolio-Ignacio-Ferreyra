import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Contacto.module.scss";

const ContactLinks = ({ contacts, phone }) => {
  const { text } = useLanguage();

  return (
    <aside className={styles.linksCard}>
      <h2>{text.contact.directChannels}</h2>

      <div className={styles.linksList}>
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

        {phone ? (
          <a href={`tel:${phone.replace(/\s+/g, "")}`}>
            <Phone size={16} />
            {phone}
          </a>
        ) : null}
      </div>
    </aside>
  );
};

export default ContactLinks;
