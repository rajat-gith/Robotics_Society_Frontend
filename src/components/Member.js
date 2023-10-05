import {
  Button,
  Typography,
  CardActionArea,
  Modal,
  Paper,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import Card from "react-animated-3d-card";
import React, { useState } from "react";
import "../styles/MemberStyle.css";
import AutoFitImage from "react-image-autofit-frame";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 200,
//   bgcolor: "#fff",
//   border: "2px solid #000",
//   borderRadius:"20px",
//   boxShadow: 24,
//   p: 4,
// };

function Member({ member, profileImg }) {
  const profilepic =
    "https://devroboticssociety.pythonanywhere.com/" +
    { profileImg }.profileImg;

  // console.log(member);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item className="member_card_1" xs={12} sm={6} md={4} lg={3} xl={3}>
      <Box
        onClick={handleOpen}
        variant="outlined"
        elevation={3}
        style={{ height: "320px", backgroundColor: "rgba(9,21,39, 0.8)" }}
        shineStrength={0.6}
        className="member_card"
      >
        <div className="grid">
          <img src={profilepic} alt="" />
        </div>
        <div className="member_name">
          <p>{member.name}</p>
        </div>
        <div className="more_button">
          <Button sx={{ fontFamily: "GFS Neohellenic", fontWeight: "800" }}>
            View Profile
          </Button>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalBox">
          <div className="member_details">
            <p>Name: {member.name}</p>
            <p>Branch: {member.branch}</p>
            <p>Domain: {member.domain}</p>
          </div>
          <div className="social_media">
            <Button
              startIcon={<GitHubIcon />}
              variant="contained"
              sx={{ backgroundColor: "black" }}
              onClick={() => window.open(member.githubLink, "_blank")}
            >
              Github
            </Button>
            <Button
              startIcon={<TwitterIcon />}
              variant="contained"
              onClick={() => window.open(member.twitterLink, "_blank")}
            >
              Twitter
            </Button>
            <Button
              startIcon={<LinkedInIcon />}
              onClick={() => window.open(member.linkedinLInk, "_blank")}
              variant="contained"
            >
              LinkedIn
            </Button>
          </div>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Grid>
  );
}

export default Member;
