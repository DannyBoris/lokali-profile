import {
  Container,
  Divider,
  Input,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgba(144,144,144,.1)",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",

    "& p": {
      fontFamily: "Nunito",
    },
    width: "100%",
    "& > div": {
      display: "flex",
      alignItems: "center",
      padding: "6px 10px",
      justifyContent: "space-around",
      "& > p:first-child": {
        flex: 1,
        fontWeight: 800,
        textAlign: "left",
      },
      "& > div >input": {
        textAlign: "end",
      },
    },
  },
  save: {
      zIndex:1,
    top: "2%",
    right: "5%",
    background: "#F8D801",
    position: "absolute",
    fontWeight: 700,
    padding: "5px 13px",
    borderRadius: "9px",
    color: "white",
  },
}));
const EditProfile = ({setEditMode}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography onClick={()=>setEditMode(false)} className={classes.save}>Save</Typography>
      <ProfileHeader edit />
      <Paper style={{ width: "90%", height: "67vh" }}>
        <form className={classes.form}>
          <Container>
            <Typography>Name</Typography>
            <Input disableUnderline />
          </Container>
          <Divider variant="middle" />
          <Container>
            <Typography>Moto</Typography>
            <Input disableUnderline value="fuck my life" />
          </Container>
          <Divider variant="middle" />

          <Container>
            <Typography>Location</Typography>
            <Input disableUnderline value="Setbia" />
          </Container>
          <Divider variant="middle" />

          <Container>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "red",
                textAlign: "left",
              }}
            >
              Private Details
            </Typography>
          </Container>
          <Container>
            <Typography>Email</Typography>
            <Input disableUnderline type="email" />
          </Container>
          <Divider variant="middle" />
          <Container>
            <Typography>Birth Date</Typography>
            <Input disableUnderline type="date" />
          </Container>
        </form>
      </Paper>
    </div>
  );
};

export default EditProfile;
