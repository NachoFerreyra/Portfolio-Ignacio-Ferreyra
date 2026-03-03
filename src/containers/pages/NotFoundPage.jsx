import { Link } from "react-router-dom";
import styles from "@/components/Readme/Readme.module.scss";

const NotFoundPage = () => {
  return (
    <section className={styles.readme}>
      <h1>404 - Archivo no encontrado</h1>
      <p>La ruta no existe en este workspace.</p>
      <Link to="/" className={styles.primaryLink}>
        Volver a README.md
      </Link>
    </section>
  );
};

export default NotFoundPage;
