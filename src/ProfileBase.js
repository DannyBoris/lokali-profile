import React, { useState } from "react";
import { makeStyles, Typography, Container } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ProfileHeader from "./ProfileHeader";

const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  root: {
    height: "80vh",
    background: "rgba(144,144,144,.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: "3.2rem",
    paddingTop: "15px",
  },
  actionButton: (myProfile) => ({
    color: myProfile ? color : "black",
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "8px",
    "&> p": {
      fontFamily: "Nunito",
      fontWeight: 700,
      marginBottom: !myProfile && "-5px",
      marginLeft: !myProfile && "10px",
    },
  }),

  infoSection: {
    display: "flex",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      "& > p": {
        fontSize: "16px",
        fontWeight: 900,
        fontFamily: "Nunito",
      },
      "& > span": {
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "Nunito",
      },
      "& > p:first-child": {
        color: color,
      },
    },
  },
}));
const ProfileBase = ({ setEditMode }) => {
  const [myProfile, setMyProfile] = useState(true);
  const classes = useStyles(myProfile);

  return (
    <div className={classes.root}>
      <ProfileHeader />
      <div className={classes.actionButton}>
        {myProfile ? (
          <EditOutlinedIcon />
        ) : (
          <img
            src={`https://img.icons8.com/metro/26/${
              myProfile ? "F8D801" : "000000"
            }/wedding-gift.png`}
          />
        )}
        <Typography
          onClick={() => {
            if (!myProfile) return;
            setEditMode(true);
          }}
        >
          {myProfile ? "EDIT PROFILE" : "SEND GIFT"}
        </Typography>
      </div>
      <Container className={classes.infoSection}>
        <Container disableGutters>
          <Typography>LOCATION</Typography>
          <span>Serbia, Berlgrade</span>
        </Container>
        <Container disableGutters>
          <Typography>LOKALI SINCE</Typography>
          <span>Novermber 2020</span>
        </Container>
      </Container>
    </div>
  );
};

export default ProfileBase;
