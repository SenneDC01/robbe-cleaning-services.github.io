import React from "react";
import styles from "./HeroSection.module.css";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";

export default function HeroSection({ onContactClick }) {
  return (
    <section className={styles.hero}>
      <Image
        src="/logo.jpg"
        alt="Cleaning service"
        layout="intrinsic"
        width={800}
        height={600}
      />
      <Button onClick={onContactClick} className={styles.button}>
        Contact
      </Button>
    </section>
  );
}
