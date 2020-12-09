import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Male from "./use.jfif";
import Female from "./fem.png";
import AppsIcon from "@material-ui/icons/Apps";
import GridMenu from "./GridMenu";
const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  avatar: {
    position: "relative",
    width: "120px",
    height: "120px",
    boxShadow: theme.shadows[5],
  },
  username: (edit) => ({
    fontSize: edit ? "14px" : "40px",
    fontFamily: "Nunito",
    fontWeight: 600,
    margin: `${edit && "20px"} 0`,
  }),
  editIcon: {},
  editImageContainer: {
    display: "flex",
    flexDirection: "column",
    "& > svg": {
      alignSelf: "flex-end",
      marginTop: "-15px",
    },
  },
  pendingReviewBanner: {
    padding: "10px",
    width: "80%",
    borderRadius: "10px",
    background: "#EA5455",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > p": {
      fontFamily: "Nunito",
      fontSize: "20px",
      marginLeft: "6px",
      fontWeight: "700",
      color: "white",
    },
  },
  appIcon: {
    position: "absolute",
    top: "2%",
    right: "5%",
  },
}));
const ProfileHeader = ({ edit = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(e) {
    setAnchorEl(e.target);
  }
  function handleClose(e) {
    setAnchorEl(null);
  }
  const [myProfile, setMyProfile] = useState(true);
  const classes = useStyles(edit);
  return (
    <>
      <AppsIcon
        onClick={handleClick}
        htmlColor={color}
        className={classes.appIcon}
      />
      <GridMenu handleClose={handleClose} anchorEl={anchorEl} />
      <div className={classes.editImageContainer}>
        <Avatar
          src={myProfile ? Male : Female}
          className={classes.avatar}
        ></Avatar>
        {edit && <EditOutlinedIcon className={classes.editIcon} />}
      </div>

      <Typography className={classes.username}>
        {edit
          ? "Lokali Since November 2020"
          : myProfile
          ? "Daniel Borisov"
          : "Asaf Sterliz"}
      </Typography>
    </>
  );
};

export default ProfileHeader;
