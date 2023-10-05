import React, { useState } from "react";
import { Flex, Box, CircularProgress, Grid, Modal } from "@mui/material";
import { TaggedContentCard } from "react-ui-cards";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <Box onClick={handleOpen}>
          <TaggedContentCard
            thumbnail={`https://devroboticssociety.pythonanywhere.com/${project.image}`}
            title={project.name}
            tags={[]}
            description="Click to know More"
          />
        </Box>
      </AnimationOnScroll>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalBox">{project.desc}</Box>
      </Modal>
    </Grid>
  );
}

export default Project;
