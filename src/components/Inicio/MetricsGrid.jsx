import styles from "./Inicio.module.scss";

const MetricsGrid = ({ projects }) => {
  const totals = projects.reduce(
    (accumulator, project) => {
      accumulator.code += project.architecture.codeFiles;
      accumulator.scss += project.architecture.scssFiles;
      accumulator.components += project.architecture.components;
      accumulator.pages += project.architecture.pages;
      return accumulator;
    },
    { code: 0, scss: 0, components: 0, pages: 0 },
  );

  const cards = [
    { label: "Archivos de codigo", value: totals.code },
    { label: "Archivos SCSS", value: totals.scss },
    { label: "Componentes", value: totals.components },
    { label: "Pages", value: totals.pages },
  ];

  return (
    <div className={styles.metrics}>
      {cards.map((card) => (
        <article key={card.label} className={styles.metricCard}>
          <strong>{card.value}</strong>
          <span>{card.label}</span>
        </article>
      ))}
    </div>
  );
};

export default MetricsGrid;
