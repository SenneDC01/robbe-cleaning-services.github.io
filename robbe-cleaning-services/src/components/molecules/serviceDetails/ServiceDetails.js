import React from "react";
import styles from "./ServiceDetails.module.css";
import Image from "next/image";

export default function ServiceDetail({
  id,
  title,
  description,
  image,
  reverse,
}) {
  return (
    <div
      className={`${styles.detail} ${reverse ? styles.reverse : ""}`}
      id={id}
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className={styles.image}
      />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
