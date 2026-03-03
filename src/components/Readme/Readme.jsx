import { profile } from "@/data/profile";
import styles from "./Readme.module.scss";

const Readme = () => {
  return (
    <section className={styles.readme}>
      <h1># Hola, soy {profile.name}</h1>

      <p>
        Este portfolio esta armado como un editor de codigo para presentar de forma
        clara el trabajo real realizado en <strong>Estetica CG</strong> y
        <strong> MSBienesRaices</strong>.
      </p>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2>Objetivo</h2>
          <p>
            Mostrar una estructura profesional en React + Vite, con rutas, pages,
            componentes desacoplados y estilos escalables con SCSS modules.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Arquitectura</h2>
          <pre>
{`src/
  routes/
  containers/pages/
  components/
  styles/
  data/
  utils/`}
          </pre>
        </article>
      </div>

      <p className={styles.tip}>
        Usa el explorador para navegar entre archivos: <code>inicio.jsx</code>,
        <code>sobre-mi.jsx</code>, <code>proyectos.jsx</code>,
        <code>habilidades.jsx</code> y <code>contacto.jsx</code>.
      </p>
    </section>
  );
};

export default Readme;
