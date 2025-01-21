import React from "react";
import styles from "./ServiceDetailsSection.module.css";
import ServiceDetail from "@/components/molecules/serviceDetails/ServiceDetails";

export default function ServiceDetailsSection() {
  return (
    <section className={styles.detailsSection}>
      <ServiceDetail
        id="residential"
        title="Residentiële Schoonmaak"
        description="Onze professionele schoonmaakdienst zorgt ervoor dat je huis
            vlekkeloos en fris blijft. Wij werken met milieuvriendelijke
            producten en een team van ervaren schoonmakers die jouw huis met
            precisie en zorg behandelen. Van stofzuigen tot dieptereiniging, wij
            zorgen ervoor dat elk hoekje en gaatje schoon is. Laat je huis
            blinken zonder zelf de handen uit de mouwen te steken!"
        image="/ruitenwasser.jpg"
      />
      <ServiceDetail
        id="solar"
        title="Zonnepanelen Kuisen"
        description="Door je zonnepanelen regelmatig te laten reinigen, verhoog je hun
            efficiëntie en levensduur. Stof, bladeren en vogelpoep verminderen
            de opbrengst van je panelen, waardoor je minder energie opwekt. Wij
            gebruiken speciale technieken en osmosewater om een streeploos en
            krasvrij resultaat te garanderen. Laat ons je zonnepanelen reinigen
            en haal het maximale rendement uit je investering!"
        image="/zonnepanelenwasser.jfif"
        reverse
      />
      <ServiceDetail
        id="osmose"
        title="Osmose Reiniging"
        description="Osmose reiniging is een revolutionaire methode om ramen, gevels en
            andere oppervlakken streeploos schoon te maken zonder chemische
            middelen. Het speciale osmosewater trekt vuil aan en spoelt het weg
            zonder residu achter te laten. Dit zorgt niet alleen voor een
            blinkend schoon resultaat, maar beschermt ook je ramen en gevels
            tegen schade door agressieve schoonmaakmiddelen. Ideaal voor
            kantoren, winkels en woningen!"
        image="/osmosewasser.jfif"
      />
    </section>
  );
}
