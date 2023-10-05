import React from "react";
import Nav from "../components/Nav";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import AchievmentSection from "../components/AchievmentSection";
import ContactSection from "../components/ContactSection";
import TeamSection from "../components/TeamSection";
import Particle from "../components/Particle";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div>
      <div className="div1">
        <Particle />
      </div>
      <div className="div2">
        <div className="section">
          <LandingSection />
          <AboutSection />
          <TeamSection />
          <ProjectSection />
          <AchievmentSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
