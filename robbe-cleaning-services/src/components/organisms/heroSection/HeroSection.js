import React from "react";
import styles from "./HeroSection.module.css";
import Button from "@/components/atoms/button/Button";
import Heading from "@/components/atoms/heading/Heading";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Heading level={1}>Robbe Cleaning Services</Heading>
      <p className={styles.subtitle}>Making your home or office sparkle!</p>
      <Button>Contact Us</Button>
    </section>
  );
}
