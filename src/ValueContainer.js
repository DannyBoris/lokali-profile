import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { ReactComponent as Trust } from "./icons/trust.svg";
import { ReactComponent as Overall } from "./icons/overall.svg";
import { ReactComponent as Quality } from "./icons/quality.svg";
import { ReactComponent as Fun } from "./icons/fun.svg";
import { ReactComponent as Respect } from "./icons/respect.svg";
import { ReactComponent as Comunication } from "./icons/comunication.svg";
import Post from "./Post";
import SubNavbar from "./SubNavbar";
const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "20px 0",
    "& > .MuiPaper-root": {
      boxShadow: "none",
      borderRadius: "none",
    },
    "&  .MuiAccordionDetails-root": {
      padding: 0,
    },
    "&  .MuiAccordionSummary-root": {
      paddingLeft: "1rem",
      display: "flex",
      justifyContent: "center!important",
    },
    "& .MuiAccordionSummary-content": {
      flexGrow: 0,
    },

    "& >  hr": {
      height: "0px",
    },
  },
  heading: {
    color: color,
    fontWeight: 700,
    fontFamily: "Nunito",
    fontSize: "20px",
  },
  bottomSection: {
    height: (posts) => (posts ? "100vh" : "75vh"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "& > div": {
      display: "flex",
      width: "90%",
      alignItems: "center",

      "& > p": {
        marginLeft: "14px",
        flex: 1,
        fontFamily: "Nunito",
        color: "rgba(100,100,100,.6)",

        textAlign: "left",
        fontWeight: 700,
      },
    },
  },
}));

export default function ValueContainer({ title, posts = false }) {
  const classes = useStyles(posts);
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Accordion
        onChange={(e) => {
          setOpen(!open);
          !open &&
            e.target.scrollIntoView({
              behavior: "smooth",
              inline: "end",
            });
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor={color} />}>
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bottomSection}>
          {!posts ? (
            <>
              <div>
                <Overall />
                <Typography>Overall</Typography>
                <Rating
                  readOnly
                  defaultValue={3}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
              <div>
                <Trust />
                <Typography>Trust</Typography>
                <Rating
                  readOnly
                  defaultValue={2}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
              <div>
                <Fun />
                <Typography>Fun</Typography>
                <Rating
                  readOnly
                  defaultValue={5}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
              <div>
                <Respect />
                <Typography>Respect</Typography>
                <Rating
                  readOnly
                  defaultValue={1}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
              <div>
                <Quality />
                <Typography>Quality</Typography>
                <Rating
                  readOnly
                  defaultValue={5}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
              <div>
                <Comunication />
                <Typography>Comunication</Typography>
                <Rating
                  readOnly
                  defaultValue={1}
                  icon={
                    <FavoriteIcon
                      className={classes.rating}
                      fontSize="inherit"
                    />
                  }
                />
              </div>
            </>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflowY: "scroll",
              }}
            >
              <SubNavbar />
              <Post />
              <Post />
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
