import React, { useEffect } from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../actions/MemberAction";
import "../styles/TeamSectionStyle.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";

function TeamSection() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="TeamSection">
      <Slider className="slider_caraousel" {...settings}>
        <div>
          <Box className="dignitary">
            <div className="profileimg">
              <img src="https://odishabytes.com/wp-content/uploads/2021/06/Prof-Banshidar-Majhi.jpg.webp" alt="" />
            </div>
            <div className="designation">
              <p> Prof. Banshidhar Majhi</p>
              <p>Vice Chancellor, VSSUT</p>
            </div>
          </Box>
        </div>
        <div>
          <Box className="dignitary">
            <div className="profileimg">
              <img src="https://i.imgur.com/yN21RIX.jpg" alt="" />
            </div>
            <div className="designation">
              <p> Prof. Sanjaya Kumar Patro</p>
              <p>Dean, Students' Welfare VSSUT</p>
            </div>
          </Box>
        </div>
        <div>
          <Box className="dignitary">
            <div className="profileimg">
              <img src="https://i.imgur.com/5dNhi5U.jpg" alt="" />
            </div>
            <div className="designation">
              <p>Mr. Bidyadhar Rout</p>
              <p>Vice-President Technical Society</p>
            </div>
          </Box>
        </div>
        <div>
          <Box className="dignitary">
            <div className="profileimg">
              <img src=" https://i.imgur.com/dInKcjK.png" alt="" />
            </div>
            <div className="designation">
              <p>Dr. Santosh Kumar Sahu</p>
              <p>Faculty Advisor Robotics Society</p>
            </div>
          </Box>
        </div>
      </Slider>
    </section>
  );
}
export default TeamSection;
