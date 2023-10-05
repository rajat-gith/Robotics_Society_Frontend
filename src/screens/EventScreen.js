import { Button, Grid } from "@mui/material";
import React from "react";
import "../styles/EventScreenStyle.css";
import "../static/achievement1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import NewEventForm from "../components/NewEventForm";
import { Link } from "react-router-dom";

function EventScreen() {
  const events_data = require("../jsonFolder/Events.json");
  const past_events = events_data.past_events;

  return (
    <div className="EventScreen">
      <div className="UpcomingEvent"></div>
      <div className="currentEvent">
        <div className="NewEventDiv">
          <img
            src="https://devroboticssociety.pythonanywhere.com/images/Drone_Event.png"
            alt=""
          />
          <div className="right_Div">
            <p>
              Let's prepare ourselves for the takeoff into the exciting realm of
              drone technology, where the sky is no longer the limit. It will be
              a riveting exploration of the boundless possibilities that drones
              offer to our world. Enthusiasts and experts alike will gather to
              witness the future taking flight. Presentations on cutting-edge
              drone applications, from delivery services to artistic aerial
              photography, will leave the audience in awe. The climax of the
              event will be a jaw-dropping live drone display, where sleek
              machines dance through the sky with precision.
            </p>
            <Link to="/events/1">
              <Button  variant="contained" color="primary">
                Register
              </Button>
            </Link>
          </div>
        </div>

        {/* <NewEventForm /> */}
      </div>
      <div className="PastGrid">
        {past_events.map((key) => (
          <Grid container className="PastGrid">
            {key.events_under.map((event) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                  <div className="event">
                    <img src={event.poster_link} alt="" srcset="" />
                    <h2>{event.name}</h2>
                    <p>{event.desc}</p>
                  </div>
                </AnimationOnScroll>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default EventScreen;
