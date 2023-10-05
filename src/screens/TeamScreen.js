import { Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMembers } from "../actions/MemberAction";
import Member from "../components/Member";
import "../styles/TeamScreenStyle.css";
import SecondYearComponent from "../components/SecondYearComponent";
import ThirdYearComponent from "../components/ThirdYearComponent";
import FinalYearComponent from "../components/FinalYearComponent";
import FirstYearComponent from "../components/FirstYearComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TeamScreen() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="TeamScreen">
      <Box className="memberContainer">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            variant="scrollable"
            className="tabdiv"
            aria-label="basic tabs example"
          >
            <Tab label="First Year" sx={{ color: "white" }} {...a11yProps(0)} />
            <Tab
              label="Second Year"
              sx={{ color: "white" }}
              {...a11yProps(1)}
            />
            <Tab label="Third Year" sx={{ color: "white" }} {...a11yProps(2)} />
            <Tab label="Final Year" sx={{ color: "white" }} {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FirstYearComponent year={2026} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SecondYearComponent year={2025} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ThirdYearComponent year={2024} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <FinalYearComponent year={2023} />
        </TabPanel>
      </Box>
    </div>
  );
}

export default TeamScreen;
