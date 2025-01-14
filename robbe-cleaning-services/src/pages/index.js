import React from "react";
import Head from "next/head";
import HeroSection from "@/components/organisms/heroSection/HeroSection";
import ServicesSection from "@/components/organisms/servicesSection/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Robbe Cleaning Services</title>
      </Head>
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </>
  );
}
