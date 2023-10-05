import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/AchievmentSectionStyle.css";
import { motion } from "framer-motion";
import { Card, Grid, Paper } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function AchievmentSection() {
  var jsonPath = require("../jsonFolder/Achievment.json");
  const achievements = jsonPath.achievments;

  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <section id="AchievmentSection">
      <div className="pagetitle">
        <p>OUR ACHIEVEMENTS</p>
      </div>
      <div className="achievments">
        <Grid container className="achievemnt_container" lg={12} spacing="12">
          {achievements.map((key) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <Box className="achievment_card">
                  <p className="achievment_title">{key.position}</p>
                  <span>Compeition:</span>
                  <p>{key.competition}</p>
                  <span>Event:</span>
                  <p>{key.event}</p>
                </Box>
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <div className="newspaper_caraousel">
        <Carousel
          slides={slides}
          autoplay={true}
          interval={1000}
          onSlideChange={callback}
        />
      </div> */}
    </section>
  );
}

export default AchievmentSection;
