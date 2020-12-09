import { Typography } from "@material-ui/core";
import React from "react";
import ReviewCard from "./ReviewCard";
const ReviewContainer = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Typography
        style={{
          color: "rgba(100,100,100,.6)",
          fontWeight: 600,
          fontFamily: "Nunito",
          fontSize: "26px",
          paddingLeft:'14px',
          textAlign:'left'
        }}
      >
        Reviews
      </Typography>
      <ReviewCard  />
      <ReviewCard long />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ReviewContainer;
