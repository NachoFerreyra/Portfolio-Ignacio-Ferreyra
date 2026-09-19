import { profiles } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroCard from "./HeroCard";
import styles from "./Inicio.module.scss";

const Inicio = () => {
  const { language, text } = useLanguage();
  const profile = profiles[language];

  return (
    <section className={styles.inicio}>
      <HeroCard profile={profile} />

      <article className={styles.block}>
        <h2>{text.home.professionalProfile}</h2>

        <p>{profile.professionalSummary}</p>
      </article>
    </section>
  );
};

export default Inicio;
