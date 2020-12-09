import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid rgba(144,144,144,.2)",
    borderRadius: "6px",
    width: "100%",
    margin:'10px 0',
    flex:'100%',
    height:'50%'
  },
}));
const Post = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Post</h1>
    </div>
  );
};

export default Post;
