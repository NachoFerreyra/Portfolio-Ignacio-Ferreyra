import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "@/components/Readme/Readme.module.scss";

const NotFoundPage = () => {
  const { text } = useLanguage();

  return (
    <section className={styles.readme}>
      <h1>{text.notFound.title}</h1>
      <p>{text.notFound.description}</p>
      <Link to="/" className={styles.primaryLink}>
        {text.notFound.back}
      </Link>
    </section>
  );
};

export default NotFoundPage;
