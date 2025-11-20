import { useState } from "react";
import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target as HTMLFormElement;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz7hhD_jQnt6wWuM3wl5cKSWfZiD3WRkAXnNnl3xlcgl1PFMEFplfBEdndlay7eUIY9/exec",
        {
          method: "POST",
          mode: "no-cors", // Google Apps Script requires this
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
        }
      );

      // Even though "no-cors" prevents reading the response,
      // the message is SENT successfully.
      setStatus("Message Sent Successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>

      <div className={styles.container}>
        {/* FORM */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Type your message..."
              required
            ></textarea>

            <button type="submit" className={styles.button}>
              Send Message
            </button>

            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className={styles.infoCard}>
          <h3>Contact Information</h3>

          <p>
            <FiMail /> muthukumarj.ec24@bitsathy.ac.in
          </p>
          <p>
            <FiPhone /> 7305514999
          </p>
          <p>
            <FiMapPin /> Perumanallur, Tiruppur
          </p>

          <h3>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/muthu-kumar-j42/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Muthukumarj-42" target="_blank">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/muthu_code/" target="_blank">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
