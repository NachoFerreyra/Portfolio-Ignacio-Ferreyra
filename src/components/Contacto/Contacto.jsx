import { useState } from "react";
import { profile } from "@/data/profile";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import styles from "./Contacto.module.scss";

const Contacto = () => {
  const [status, setStatus] = useState("idle");

  return (
    <section className={styles.contacto}>
      <header className={styles.header}>
        <h1>async function contacto() {'{'}</h1>
        <p>
          Si queres que trabajemos juntos o revisar codigo de tus proyectos,
          escribime por formulario o por los canales directos.
        </p>
      </header>

      <div className={styles.grid}>
        <ContactForm email={profile.contacts.email} status={status} setStatus={setStatus} />
        <ContactLinks contacts={profile.contacts} />
      </div>

      <p className={styles.closure}>{'}'}</p>
    </section>
  );
};

export default Contacto;
