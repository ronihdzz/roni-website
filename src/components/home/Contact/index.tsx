import type { FormEvent } from "react";
import { useRouter } from "next/router";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import type { Contact as ContactData, ContactForm as ContactFormData } from "@/content/types";
import { site } from "@/config/site";
import { getUi } from "@/config/i18n";
import styles from "./Contact.module.scss";

function ContactForm({ form }: { form: ContactFormData }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `${name}${email ? ` <${email}>` : ""}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>{form.title}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        {form.fields.map((field) =>
          field.type === "textarea" ? (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              rows={field.rows ?? 5}
              required={field.required}
            />
          ) : (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
            />
          ),
        )}
        <button type="submit" className={styles.submit}>
          {form.submitText}
        </button>
      </form>
    </div>
  );
}

type ContactProps = {
  contact: ContactData;
};

export default function Contact({ contact }: ContactProps) {
  const { locale } = useRouter();
  const ui = getUi(locale);

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>{ui.nav.contact}</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>{ui.workTogether}</h3>
          <p className={styles.infoSubtitle}>{contact.form.subtitle}</p>

          <div className={styles.items}>
            <div className={styles.item}>
              <Mail size={16} className={styles.itemIcon} />
              <div className={styles.itemText}>
                <strong>{ui.email}</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className={styles.item}>
              <Phone size={16} className={styles.itemIcon} />
              <div className={styles.itemText}>
                <strong>{ui.phone}</strong>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>

            <div className={styles.item}>
              <MapPin size={16} className={styles.itemIcon} />
              <div className={styles.itemText}>
                <strong>{ui.location}</strong>
                <span>{contact.location}</span>
              </div>
            </div>

            <div className={styles.item}>
              <FaLinkedin size={16} className={styles.itemIcon} />
              <div className={styles.itemText}>
                <strong>LinkedIn</strong>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ronihdz
                </a>
              </div>
            </div>
          </div>
        </div>

        <ContactForm form={contact.form} />
      </div>
    </section>
  );
}
