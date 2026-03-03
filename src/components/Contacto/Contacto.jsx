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
        <h1>Contacto</h1>
        <p>
          Si te interesa trabajar conmigo o queres conversar sobre algun
          proyecto, podes escribirme desde el formulario o por los canales
          directos.
        </p>
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
