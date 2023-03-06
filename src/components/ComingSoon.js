import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headingDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  heading: {
    color: "#eeeeee",
    fontWeight: 700,
  },
});
const ComingSoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.headingDiv}>
      <Typography variant="h1" className={classes.heading}>
        Coming Soon
      </Typography>
    </div>
  );
};

export default ComingSoon;
