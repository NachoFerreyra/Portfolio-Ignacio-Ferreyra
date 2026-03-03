import { useState } from "react";
import { Send } from "lucide-react";
import styles from "./Contacto.module.scss";

const ContactForm = ({ email, status, setStatus }) => {
  const [form, setForm] = useState({
    name: "",
    from: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.from || !form.message) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Contacto portfolio de ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.from}\n\n${form.message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="Tu nombre"
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={form.from}
          onChange={(event) => setForm({ ...form, from: event.target.value })}
          placeholder="tu@email.com"
        />
      </label>

      <label>
        Mensaje
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder="Contame brevemente tu idea o necesidad"
        />
      </label>

      {status === "error" ? (
        <p className={styles.error}>
          Completa nombre, email y mensaje antes de enviar.
        </p>
      ) : null}

      {status === "success" ? (
        <p className={styles.success}>
          Se abrio tu cliente de correo con el mensaje cargado.
        </p>
      ) : null}

      <button type="submit">
        <Send size={16} />
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;