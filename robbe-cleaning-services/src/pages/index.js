import React from "react";
import Head from "next/head";
import HeroSection from "@/components/organisms/heroSection/HeroSection";
import ServiceCardSection from "@/components/organisms/serviceCardSection/ServiceCardSection";
import ServiceDetailsSection from "@/components/organisms/serviceDetailsSection/ServiceDetailsSection";

export default function HomePage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Robbe Cleaning Services</title>
      </Head>
      <main>
        <HeroSection />
        <ServiceCardSection onCardClick={scrollToSection} />
        <ServiceDetailsSection />
      </main>
    </>
  );
}
