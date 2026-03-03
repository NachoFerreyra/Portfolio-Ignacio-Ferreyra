import { profile } from "@/data/profile";
import styles from "./Readme.module.scss";

const Readme = () => {
  return (
    <section className={styles.readme}>
      <h1># Hola, soy Ignacio Ferreyra</h1>

      <p>
        Este portfolio resume mi perfil y los proyectos que vengo desarrollando
        en frontend. Esta organizado como un workspace para que puedas recorrer
        cada seccion de forma simple.
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
