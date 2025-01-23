import React from "react";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <h2 className={styles.brand}>ROBBE CLEANING SERVICES</h2>
        <div className={styles.contactInfo}>
          <p>
            <span className={styles.icon}>👤</span> Robbe De Geyter
          </p>
          <p>
            <span className={styles.icon}>📞</span>
            <a href="tel:+32471916151" className={styles.link}>
              0471/91.61.51
            </a>
          </p>
          <p>
            <span className={styles.icon}>✉️</span>
            <a
              href="mailto:robbecleaningservices@gmail.com"
              className={styles.link}
            >
              robbecleaningservices@gmail.com
            </a>
          </p>
          <p>
            <span className={styles.icon}>💼</span> BTW: BE1010.624.489
          </p>
        </div>
      </div>
      <div className={styles.credit}>
        <p>
          © 2025 Robbe Cleaning Services | Website by{" "}
          <a
            href="https://www.linkedin.com/in/senne-de-cock-2783a12a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Senne De Cock
          </a>
        </p>
      </div>
    </footer>
  );
}
