import React from "react";
import styles from "./ServiceCardSection.module.css";
import ServiceCard from "@/components/molecules/serviceCard/ServiceCard";

export default function ServiceCardSection({ onCardClick }) {
  return (
    <section className={styles.cardSection}>
      <h2>Diensten</h2>
      <div className={styles.container}>
        <ServiceCard
          title="Residentiële Schoonmaak"
          description="Vlekkeloze huizen, stressvrij leven."
          image="/ruitenwasser.jpg"
          onClick={() => onCardClick("residential")}
        />
        <ServiceCard
          title="Zonnepanelen Kuisen"
          description="Zonnepanelen grondig gereinigd voor optimale prestaties."
          image="/zonnepanelenwasser.jfif"
          onClick={() => onCardClick("solar")}
        />
        <ServiceCard
          title="Osmose Reiniging"
          description="Reiniging met osmose voor een streeploos resultaat."
          image="/osmosewasser.jpg"
          onClick={() => onCardClick("osmose")}
        />
      </div>
    </section>
  );
}
