import React from "react";
import Head from "next/head";
import HeroSection from "@/components/organisms/heroSection/HeroSection";
import ServiceCardSection from "@/components/organisms/serviceCardSection/ServiceCardSection";
import ServiceDetailsSection from "@/components/organisms/serviceDetailsSection/ServiceDetailsSection";
import FooterSection from "@/components/organisms/footerSection/FooterSection";

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
        <link rel="icon" href="/favicon.png" sizes="any" />
        <title>Robbe Cleaning Services</title>
      </Head>
      <main>
        <HeroSection onContactClick={() => scrollToSection("footer")} />
        <ServiceCardSection onCardClick={scrollToSection} />
        <ServiceDetailsSection />
        <FooterSection />
      </main>
    </>
  );
}
