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
      await fetch(
        "https://script.google.com/macros/s/AKfycbz7hhD_jQnt6wWuM3wl5cKSWfZiD3WRkAXnNnl3xlcgl1PFMEFplfBEdndlay7eUIY9/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name, // ❗ NO `.value`
            email: email, // ❗ NO `.value`
            message: message, // ❗ NO `.value`
          }),
        }
      );

      setStatus("Message Sent Successfully!");

      // Reset fields
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target)} // correct
          required
        />

        <input
          type="email"
          className={styles.input}
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target)} // correct
          required
        />

        <textarea
          className={styles.textarea}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target)} // correct
          required
        />

        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>

      <p className={styles.status}>{status}</p>
    </section>
  );
}
