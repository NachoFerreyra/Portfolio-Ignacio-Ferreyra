import { useEffect, useState } from "react";
import { Download, Github, Linkedin, MapPin, Moon, Sun } from "lucide-react";
import { profiles } from "@/data/profile";
import { portfolioCopy } from "@/data/portfolioCopy";
import { getProjects } from "@/data/projects";
import { skillsByLanguage } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import ProjectCard from "@/components/ProjectCard";
import ImageViewer from "@/components/ImageViewer";
import styles from "./App.module.scss";

function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Tags({ items }) {
  return <ul className={styles.tags}>{[...new Set(items)].map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function App() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [preview, setPreview] = useState(null);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const profile = profiles[language];
  const skills = skillsByLanguage[language];
  const text = portfolioCopy[language];
  const es = language === "es";
  const projects = getProjects(language);
  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const previewProject = preview && projects.find(project => project.id === preview.projectId);
  const resumeUrl = es ? "/cv/Ignacio Ferreyra CV.pdf" : "/cv/Ignacio Ferreyra Resume.pdf";

  useEffect(() => {
    const legacy = { "/inicio": "inicio", "/proyectos": "proyectos", "/projects": "proyectos", "/sobre-mi": "perfil", "/about": "perfil", "/habilidades": "habilidades", "/skills": "habilidades", "/contacto": "contacto", "/contact": "contacto" };
    const target = legacy[window.location.pathname.replace(/\/$/, "")];
    if (target && !window.location.hash) {
      window.history.replaceState(null, "", `/#${target}`);
      document.getElementById(target)?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  function changeFilter(value) {
    setFilter(value);
    setVisibleCount(4);
    setExpandedProjectId(null);
  }

  function showLess() {
    setVisibleCount(4);
    setExpandedProjectId(null);
    requestAnimationFrame(() => {
      const heading = document.getElementById("projects-title");
      heading?.focus({ preventScroll: true });
      heading?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
  }

  return (
    <div className={styles.page} id="inicio">
      <a className={styles.skipLink} href="#contenido">{es ? "Saltar al contenido" : "Skip to content"}</a>
      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label={es ? "Perfil personal" : "Personal profile"}>
          <div className={styles.preferences}>
            <span>Portfolio</span>
            <div><button type="button" onClick={toggleLanguage} aria-label={text.changeLanguage}>{es ? "EN" : "ES"}</button><button type="button" onClick={toggleTheme} aria-label={text.changeTheme}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button></div>
          </div>
          <div className={styles.identity}>
            <img className={styles.portrait} src={profile.avatar.src} alt={profile.avatar.alt} style={{ objectPosition: profile.avatar.position }} width="160" height="190" fetchPriority="high" draggable="false" />
            <div><h1>{profile.name}</h1><p className={styles.role}>{profile.role}</p></div>
          </div>
          <div className={styles.personalDetails}><span><MapPin size={15} aria-hidden="true" />{profile.location}</span><span className={styles.availability}><span aria-hidden="true" />{profile.availability}</span></div>
          <nav className={styles.nav} aria-label={es ? "Secciones" : "Sections"}>
            <a href="#perfil">{text.nav.profile}</a><a href="#habilidades">{text.nav.skills}</a><a href="#proyectos">{text.nav.work}</a><a href="#contacto">{text.nav.contact}</a>
          </nav>
          <a className={styles.resumeButton} href={resumeUrl} download><Download size={17} aria-hidden="true" />{text.downloadCv}</a>
          <div className={styles.socials}><ExternalLink href={profile.contacts.github}><Github size={17} />GitHub</ExternalLink><ExternalLink href={profile.contacts.linkedin}><Linkedin size={17} />LinkedIn</ExternalLink></div>
        </aside>

        <main id="contenido" className={styles.main}>
          <section className={styles.section} id="perfil" aria-labelledby="about-title">
            <h2 id="about-title">{text.nav.profile}</h2>
            <p className={styles.summary}>{profile.professionalSummary}</p>
            <div className={styles.workHistory}>
              <h3>{text.experience}</h3>
              {profile.workExperience.map((job) => <article key={job.company}>
                <div className={styles.workHeading}><h4><ExternalLink href={job.companyUrl}>{job.company}</ExternalLink></h4><span>{job.period}</span></div>
                <p className={styles.workRole}>{job.role}</p>
                <p>{job.description}</p>
              </article>)}
            </div>
            <div className={styles.aboutGrid}>
              <div><h3>{text.spokenLanguages}</h3><dl className={styles.languageList}>{profile.languages.map((item) => <div key={item.name}><dt>{item.name}</dt><dd>{item.level}</dd></div>)}</dl></div>
              <div><h3>{text.interests}</h3><ul className={styles.simpleList}>{profile.about.interests.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className={styles.education}><h3>{text.education}</h3>{profile.educationHistory.map((item) => <div className={styles.educationItem} key={item.title}><strong>{item.title}</strong><span>{item.institution}</span><time>{item.period}</time></div>)}</div>
            </div>
          </section>

          <section className={styles.section} id="habilidades" aria-labelledby="skills-title">
            <h2 id="skills-title">{text.nav.skills}</h2>
            <div className={styles.programmingLanguages}><h3>{text.programmingLanguages}</h3><Tags items={skills.languages} /></div>
            <div className={styles.skillGrid}>{[[text.frontend, skills.frontendCv], [text.backend, [...skills.backend, ...skills.databases]], [text.analysis, skills.analysisAndDesign], [text.testing, [...skills.testing, ...skills.toolsCv]]].map(([title, items]) => <div key={title}><h3>{title}</h3><Tags items={items} /></div>)}</div>
          </section>

          <section className={styles.section} id="proyectos" aria-labelledby="projects-title">
            <div className={styles.sectionHeading}><h2 id="projects-title" tabIndex={-1}>{text.nav.work}</h2><span>{projects.length}</span></div>
            <div className={styles.filters} role="group" aria-label={es ? "Filtrar proyectos" : "Filter projects"}>{[["all", es ? "Todos" : "All"], ["product", es ? "Aplicaciones y APIs" : "Applications & APIs"], ["web", "Web"]].map(([value, label]) => <button type="button" key={value} aria-pressed={filter === value} onClick={() => changeFilter(value)}>{label}</button>)}</div>
            <p className={styles.resultCount} role="status">{visibleProjects.length} {es ? "de" : "of"} {filteredProjects.length} {es ? "proyectos" : "projects"}</p>
            <div className={styles.projectList}>{visibleProjects.map((project) => <ProjectCard
              key={project.id} project={project} language={language} text={text}
              open={expandedProjectId === project.id}
              onToggle={() => setExpandedProjectId(current => current === project.id ? null : project.id)}
              onPreview={index => setPreview({ projectId: project.id, index })}
            />)}</div>
            {filteredProjects.length > 4 && <div className={styles.projectListActions}>
              {visibleProjects.length < filteredProjects.length && <button type="button" onClick={() => setVisibleCount(current => current + 4)}>{text.showMore.replace("{count}", Math.min(4, filteredProjects.length - visibleProjects.length))}</button>}
              {visibleCount > 4 && <button type="button" onClick={showLess}>{text.showLess}</button>}
              <a href="#contacto">{text.nav.contact}</a>
            </div>}
          </section>

          <section className={styles.section} id="contacto" aria-labelledby="contact-title">
            <h2 id="contact-title">{text.nav.contact}</h2>
            <dl className={styles.contactList}>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</a></dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd><ExternalLink href={profile.contacts.linkedin}>ignacio-ferreyra1</ExternalLink></dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd><ExternalLink href={profile.contacts.github}>NachoFerreyra</ExternalLink></dd>
              </div>
            </dl>
          </section>
          <footer className={styles.footer}>{profile.name} · {new Date().getFullYear()}</footer>
        </main>
      </div>
      {previewProject && <ImageViewer key={previewProject.id} project={previewProject} initialIndex={preview.index} language={language} onClose={() => setPreview(null)} />}
    </div>
  );
}
