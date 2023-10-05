import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/AboutSectionStyle.css";
import { Container, Typography } from "@mui/material";
import "@fontsource/gfs-neohellenic";
import { motion, useAnimation } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function AboutSection() {


  return (
    <div id="AboutSection">
      <div className="aboutcontent">
        <p className="about_title">AIM</p>
        <p className="aimcontent">
          Developing new ideas in the field of Robotics and Technology to enable
          students to learn new <span className="capitalize">Technologies</span>
          , assimilate appropriate skills creating innovations which solve real
          world problems and improve the quality of life by training them with
          strength of character, leadership and self-attainment.
        </p>
        <p className="about_title">ABOUT</p>
        <div className="aimcontent">
          The Robotics Club is an
          <span className="capitalize"> OFFICIAL TECHNICAL club</span> of VSSUT,
          Burla which encourages various technical activities and projects in
          the field of amateur as well as advanced Robotics, in the University.
          The members are a bunch of budding technocrats who are driven by an
          acute zest for learning technological advancements and happenings in
          the modern world, and endeavour in applying the theoretical learning
          into realistic projects.
        </div>
      </div>
      <div className="vdo">
        <iframe
          className="vdoframe"
          src="https://www.youtube.com/embed/RhroZl45nQo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutSection;
