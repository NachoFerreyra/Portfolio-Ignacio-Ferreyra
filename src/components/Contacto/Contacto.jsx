import { useState } from "react";
import { profiles } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import styles from "./Contacto.module.scss";

const Contacto = () => {
  const [status, setStatus] = useState("idle");
  const { language, text } = useLanguage();
  const profile = profiles[language];

  return (
    <section className={styles.contacto}>
      <header className={styles.header}>
        <h1>{text.contact.title}</h1>
        <p>{text.contact.description}</p>
      </header>

      <div className={styles.grid}>
        <ContactForm
          email={profile.contacts.email}
          status={status}
          setStatus={setStatus}
        />
        <ContactLinks contacts={profile.contacts} phone={profile.phone} />
      </div>
    </section>
  );
};

export default Contacto;
