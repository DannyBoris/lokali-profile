import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import ValueContainer from "./ValueContainer";
import ProfileBase from "./ProfileBase";
import TimeContainer from "./TimeContainer";
import ReviewContainer from "./ReviewContainer";

const color = "#F8D801";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
}));
const Profile = ({ setEditMode }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <ProfileBase setEditMode={setEditMode} />
      <TimeContainer />
      <ValueContainer title={"View My Values"} />
      <ValueContainer posts title={"View My Posts"} />
      <Divider variant="middle" />
      <ReviewContainer />
    </div>
  );
};

export default Profile;
