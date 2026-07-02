import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, UserCheck } from "lucide-react";
import styles from "./Inicio.module.scss";

const HeroCard = ({ profile }) => {
  const avatarSrc = profile.avatar?.src?.trim() ?? "";
  const [avatarFailed, setAvatarFailed] = useState(false);
  const avatarInitials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
  const showAvatarFallback = !avatarSrc || avatarFailed;

  return (
    <article className={styles.heroCard}>
      <div className={styles.codeHeader}>
        <span>inicio.jsx</span>
      </div>

      <div className={styles.codePanel}>
        <pre className={styles.codeBlock}>
          <span>
            <em>const</em> perfil = {"{"}
          </span>
          <span>
            {"  "}
            <strong>nombre</strong>: "{profile.name}",
          </span>
          <span>
            {"  "}
            <strong>rol</strong>: "{profile.role}",
          </span>
          <span>
            {"  "}
            <strong>especialidad</strong>: "Frontend · Backend · Analisis de Sistemas",
          </span>
          <span>
            {"  "}
            <strong>ubicacion</strong>: "{profile.location}",
          </span>
          <span>
            {"  "}
            <strong>estado</strong>: "{profile.availability}",
          </span>
          <span>{"}"};</span>
        </pre>

        <aside className={styles.avatarPanel} aria-label="Avatar de perfil">
          <div className={styles.avatarFrame}>
            {showAvatarFallback ? (
              <span className={styles.avatarFallback}>
                {avatarInitials || "IF"}
              </span>
            ) : (
              <img
                className={styles.avatarImage}
                src={avatarSrc}
                alt={profile.avatar?.alt ?? `Foto de ${profile.name}`}
                loading="lazy"
                style={{
                  objectPosition: profile.avatar?.position ?? "50% 35%",
                }}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </div>
        </aside>
      </div>

      <div className={styles.inlineData}>
        <span>
          <MapPin size={14} /> {profile.location}
        </span>
        <span>
          <UserCheck size={14} /> {profile.availability}
        </span>
        <span>
          <Phone size={14} /> {profile.phone}
        </span>
      </div>

      <div className={styles.links}>
        <a href={profile.contacts.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
        <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={`mailto:${profile.contacts.email}`}>
          <Mail size={16} /> Email
        </a>
      </div>
    </article>
  );
};

export default HeroCard;
