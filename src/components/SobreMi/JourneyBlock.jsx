import styles from "./SobreMi.module.scss";

const JourneyBlock = ({ project }) => {
  return (
    <article className={styles.card}>
      <h2>{project.name}</h2>
      <p>{project.summary}</p>

      <div className={styles.meta}>
        <span>{project.type}</span>
        <span>{project.architecture.components} componentes</span>
        <span>{project.architecture.pages} pages</span>
      </div>

      <div className={styles.tags}>
        {project.stack.slice(0, 6).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
};

export default JourneyBlock;
