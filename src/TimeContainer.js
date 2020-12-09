import React from "react";
import { Divider, Container, makeStyles } from "@material-ui/core";

const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  time: {
    width: "92%",
    margin: "-3rem auto 10px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "10px",
    padding: "15px",
    background: "white",
    border: `1px solid rgba(144,144,144,.2)`,

    "& > div": {
      display: "flex",
      flexDirection: "column",
    },
    "& span": {
      fontSize: "16px",
    },
    "& span:nth-child(2)": {
      fontWeight: 600,
      color: "rgba(100,100,100,.6)",
      fontSize: "14px",
    },
    "& span:first-child": {
      fontSize: "16px",
      color: color,
      fontWeight: 900,
    },
  },
}));
const TimeContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.time}>
      <div>
        <span>11</span>
        <span>Value Created</span>
      </div>
      <Divider orientation="vertical" variant="middle" />
      <div>
        <span>57</span>
        <span>Value Received</span>
      </div>
      <Divider orientation="vertical" variant="middle" />
      <div>
        <span>23</span>
        <span>Friends Invited</span>
      </div>
    </Container>
  );
};

export default TimeContainer;
