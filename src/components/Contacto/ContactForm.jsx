import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Contacto.module.scss";

const ContactForm = ({ email, status, setStatus }) => {
  const { text } = useLanguage();
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

    const subject = encodeURIComponent(`${text.contact.subject} ${form.name}`);
    const body = encodeURIComponent(
      `${text.contact.bodyName}: ${form.name}\nEmail: ${form.from}\n\n${form.message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        {text.contact.name}
        <input
          type="text"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder={text.contact.yourName}
        />
      </label>

      <label>
        {text.contact.email}
        <input
          type="email"
          value={form.from}
          onChange={(event) => setForm({ ...form, from: event.target.value })}
          placeholder={text.contact.yourEmail}
        />
      </label>

      <label>
        {text.contact.message}
        <textarea
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder={text.contact.messagePlaceholder}
        />
      </label>

      {status === "error" ? (
        <p className={styles.error}>{text.contact.formError}</p>
      ) : null}

      {status === "success" ? (
        <p className={styles.success}>{text.contact.formSuccess}</p>
      ) : null}

      <button type="submit">
        <Send size={16} />
        {text.contact.sendMessage}
      </button>
    </form>
  );
};

export default ContactForm;
