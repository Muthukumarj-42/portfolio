import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz7hhD_jQnt6wWuM3wl5cKSWfZiD3WRkAXnNnl3xlcgl1PFMEFplfBEdndlay7eUIY9/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      setStatus("Message Sent Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>

      <p className={styles.status}>{status}</p>
    </section>
  );
}
