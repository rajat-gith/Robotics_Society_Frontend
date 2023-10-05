import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/NavbarStyle.css";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [showNavbar, setshowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <div className="nav">
      <header className="navheader">
        <img src="https://i.imgur.com/DiBqJ0j.png" alt="" className="logo" />
        <div className={`navlinks  ${showNavbar && "active"}`}>
          <Link to="/">Home</Link>
          <Link to="/#AboutSection">About</Link>
          <Link to="/#ProjectSection">Project</Link>
          <Link to="/events">Events</Link>
          <Link to="/#AchievmentSection">Achievment</Link>
          <Link to="/team">Team</Link>
          <Link to="/#ContactSection" className="contactLink">
            <Button sx={{ bgcolor: "#FFOOC" }} variant="contained">
              Contact
            </Button>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <div className="contactbutton">
          <Link to="/#ContactSection">
            <Button
              sx={{
                borderColor: "white",
                color: "white",
                borderWidth: "4",
                //  bgcolor:"#091527"
              }}
              variant="outlined"
            >
              Contact
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;
