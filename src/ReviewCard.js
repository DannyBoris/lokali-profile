import { Avatar, Divider, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab/";
import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 15px",
    textAlign: "left",
    borderRadius: "8px",
    boxShadow: theme.shadows[2],

    padding: "10px",
    display: "flex",
    alignItems: "center",
    "& p": {
      fontFamily: "Nunito",
    },
  },
  avatar: {
    width: "30px",
    height: "30px",
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    "& > p": {
      fontSize: "16px",
    },
  },
  username: {
    fontFamily: "Nunito",
    lineHeight: "1.15rem",
    fontWeight: "700",
  },
  text: {
    fontSize: "13px",
    color: "rgba(144,144,144,.9)",
    fontWeight: 500,
    fontFamily: "Nunito",
  },
}));
const ReviewCard = ({ long }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.userContainer}>
        <Avatar className={classes.avatar} src="" />
        <Typography className={classes.username}>Asaf Sterliz</Typography>
      </div>
      <div style={{ marginLeft: "14px" }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Rating
            readOnly
            defaultValue={4}
            icon={<FavoriteIcon fontSize="inherit" />}
            size="small"
            />
            <Typography style={{fontSize:'10px', color:'rgba(144,144,144,.9)'}}>Novembar 2019</Typography>
        </div>
        <Typography className={classes.text}>
          That was a really cool intercation, I loved Danny so much and would
          love to create awesome apps with
          {!long ? "him again So please let me go again to the" : "..."}
          {long && (
            <span
              style={{ fontStyle: "italic", fontWeight: "700", color: color }}
            >
              {" "}
              Read more
            </span>
          )}
        </Typography>
      </div>
    </div>
  );
};

export default ReviewCard;
