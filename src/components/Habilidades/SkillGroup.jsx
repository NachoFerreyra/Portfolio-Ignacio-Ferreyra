import styles from "./Habilidades.module.scss";

const SkillGroup = ({ title, items }) => {
  return (
    <article className={styles.group}>
      <h2>{title}</h2>
      <div className={styles.tags}>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
};

export default SkillGroup;
