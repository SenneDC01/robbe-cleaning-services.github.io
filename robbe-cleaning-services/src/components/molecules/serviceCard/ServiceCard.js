import React from "react";
import styles from "./ServiceCard.module.css";
import Image from "next/image";

export default function ServiceCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={600}
        height={400}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
