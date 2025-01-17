import React from "react";
import styles from "./ServicesSection.module.css";
import ServiceCard from "@/components/molecules/serviceCard/ServiceCard";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <h2>Diensten</h2>
      <div className={styles.container}>
        <ServiceCard
          title="Residentiële Schoonmaak"
          description="Vlekkeloze huizen, stressvrij leven."
          image="/ruitenwasser.jpg"
        />
        <ServiceCard
          title="Zonnepanelen Kuisen"
          description="Zonnepanelen grondig gereinigd voor optimale prestaties."
          image="/zonnepanelenwasser.jfif"
        />
        <ServiceCard
          title="Osmose Reiniging"
          description="Reiniging met osmose voor een streeploos resultaat."
          image="/osmosewasser.jfif"
        />
      </div>
    </section>
  );
}
