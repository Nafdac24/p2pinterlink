import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InstitutionalCredibility from "../components/InstitutionalCredibility";
import BackedByBuilders from "../components/BackedByBuilders";
import GetStarted from "../components/GetStarted";
import LatestReleases from "../components/LatestReleases";
import { BuildingTheInfrastructure, CryptoMadeSimple, DigitalAssets } from "../components/DigitalAssets";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <InstitutionalCredibility />
      <BackedByBuilders />
      <DigitalAssets />
      <CryptoMadeSimple />
      <BuildingTheInfrastructure />
      <GetStarted />
      <LatestReleases />
      <Footer />
    </div>
  );
}
