import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/LandingSectionStyle.css";
import Particle from "../components/Particle";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

function LandingSection() {
  return (
    <section id="LandingSection">
      <div className="logos">
        <img
          src="https://i.imgur.com/ll5Lo2D.png"
          className="vssutlogo"
          alt=""
        />
        <img
          src="https://i.imgur.com/jt1R2Z4.png"
          className="clublogo"
          alt=""
        />
      </div>

      <div className="title">
        <p>VSSUT ROBOTICS</p>
        <span className="tagline">WHERE IMAGINATION MEETS INNOVATION</span>
      </div>

      {/* <div className="socialmedia">
        <a
          className="sociaLinks"
          href="https://www.youtube.com/c/VSSUTROBOTICS"
        >
          Youtube
        </a>
        <a
          className="sociaLinks"
          href="https://www.instagram.com/vssut_robotics/?hl=en"
        >
          Instagram
        </a>
        <a
          className="sociaLinks"
          href="https://www.facebook.com/vssutrobotics/"
        >
          Facebook
        </a>
      </div> */}
    </section>
  );
}

export default LandingSection;
