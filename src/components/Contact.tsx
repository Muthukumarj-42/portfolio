import { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";

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
          body: JSON.stringify({ name, email, message }),
        }
      );

      setStatus("Message Sent Successfully!");
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

      <div className={styles.container}>
        {/* Left Side - Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className={styles.sendBtn}>
            Send Message
          </button>

          <p className={styles.status}>{status}</p>
        </form>

        {/* Right Side - Contact info */}
        <div className={styles.infoBox}>
          <h3>Contact Information</h3>

          <p>
            <FaEnvelope /> muthukumarj.ec24@bitsathy.ac.in
          </p>
          <p>
            <FaPhone /> 7305514999
          </p>
          <p>
            <FaMapMarkerAlt /> Perumanallur, Tiruppur
          </p>

          <h3 className={styles.connectTitle}>Connect With Me</h3>

          <div className={styles.icons}>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Muthukumarj-42" target="_blank">
              <FaGithub />
            </a>
            <a href="#">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
