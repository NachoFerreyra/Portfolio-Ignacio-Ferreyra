import { profile } from "@/data/profile";
import styles from "./Readme.module.scss";

const Readme = () => {
  return (
    <section className={styles.readme}>
      <h1># Bienvenido a mi portfolio!</h1>

      <p>
        Este portfolio muestra mi perfil, experiencia tecnica y proyectos en los
        que participe, con foco en frontend y analisis funcional.
      </p>

      <article className={styles.card}>
        <h2>Datos de contacto</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.contacts.email}`}>
              {profile.contacts.email}
            </a>
          </li>
          <li>
            <strong>Telefono:</strong> {profile.phone}
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
    </section>
  );
};

export default Readme;
