import React from "react";
import { Menu, MenuItem, makeStyles, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SettingsIcon from "@material-ui/icons/Settings";
import RateReviewIcon from "@material-ui/icons/RateReview";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import WhatshotIcon from "@material-ui/icons/Whatshot";
const color = "#F8D801";
const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    textAlign: "center",
    background: "rgba(0,0,0,.8)",
    padding: 0,
  },
  paper: {
    opacity: ".5",
    boxShadow: "0",
  },
}));
const GridMenu = ({ anchorEl, handleClose }) => {
  const items = [
    { name: "Saved", icon: <FavoriteBorderIcon /> },
    { name: "Upcoming", icon: <EventAvailableIcon /> },
    { name: "Settings", icon: <SettingsIcon /> },
    { name: "Reviews", icon: <RateReviewIcon /> },
    { name: "Help Center", icon: <HelpOutlineIcon /> },
    { name: "Something ", icon: <WhatshotIcon /> },
    { name: "Something ", icon: <WhatshotIcon /> },
    { name: "Something ", icon: <WhatshotIcon /> },
    { name: "Something ", icon: <WhatshotIcon /> },
  ];
  const classes = useStyles();
  return (
    <Menu
      elevation={0}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      classes={{ root: classes.root, list: classes.list, paper: classes.paper }}
      onClose={handleClose}
    >
      {items.map((item) => (
        <MenuItem
          style={{
            color: "white",
            border: ".5px solid rgba(150,150,150,.2)",
            display: "flex",
            flexDirection: "column",
            padding: "25px 20px",
          }}
        >
          {item.icon}
          <Typography>{item.name}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default GridMenu;
