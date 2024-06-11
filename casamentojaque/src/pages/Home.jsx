import React from "react";
import HeroImage from "../components/HeroImage";
import OurStory from "../components/OurStory";
import RsvpForm from "../components/RsvpForm";
import GiftSection from "../components/GiftSection";
import LocationMap from "../components/LocationMap";

function Home() {
  return (
    <div>
      <HeroImage />
      <OurStory />
      <RsvpForm />
      <GiftSection />
      <LocationMap />
    </div>
  );
}

export default Home;
